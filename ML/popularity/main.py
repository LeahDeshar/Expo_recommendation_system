from fastapi import FastAPI
import pandas as pd
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


movies_names = pd.read_csv("movies.csv")
ratings = pd.read_csv("ratings.csv")


def popularity_based_recommendation(movies_df, ratings_df, n=10):
    movie_ratings = pd.merge(ratings_df, movies_df, on='movieId')
    movie_stats = movie_ratings.groupby('title').agg({
        'rating': 'mean',
        'movieId': 'count'
    }).rename(columns={'rating': 'mean_rating', 'movieId': 'rating_count'})
    popular_movies = movie_stats[movie_stats['rating_count'] > 100]
    top_movies = popular_movies.sort_values('mean_rating', ascending=False).head(n)
    
    return top_movies[['mean_rating', 'rating_count']].reset_index().to_dict(orient='records')

@app.get("/recommendations/")
def get_recommendations(n: int = 10):
    recommendations = popularity_based_recommendation(movies_names, ratings, n)
    return {"recommendations": recommendations}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
