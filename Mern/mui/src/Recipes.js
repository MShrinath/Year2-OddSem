import React, { useState } from 'react';
import { Container, TextField, Typography } from '@mui/material';
import { searchRecipes } from './Api';

const Recipes = () => {
    const [query, setQuery] = useState('');
    const [recipes, setRecipes] = useState([]);

    const handleSearch = async () => {
        try {
            const data = await searchRecipes(query);
            setRecipes(data);
        } catch (error) {
            setRecipes([]);
        }
    };

    return (
        <div>
        <Container style={{ textAlign: 'right', marginTop: '30px' }}>
            <Typography variant="h4" gutterBottom>
                KL Recipes
            </Typography>
            <TextField
                label="Search recipes"
                variant="outlined"
                fullWidth
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        handleSearch();
                    }
                }}
                style={{
                    marginBottom: '20px',
                    backgroundColor: '#f5f5f5',
                    borderRadius: '8px',
                    padding: '8px',
                }}
                inputProps={{
                    style: {
                        backgroundColor: 'inherit',
                        borderRadius: '4px',
                        padding: '6px',
                    },
                }}
            />
            <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))' }}>
                {recipes.map((recipe) => (
                    <div key={recipe.recipe.uri} style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '8px' }}>
                        <Typography variant="h6">{recipe.recipe.label}</Typography>
                        <img src={recipe.recipe.image} alt={recipe.recipe.label} style={{ width: '100%', marginTop: '10px' }} />
                        <ul style={{ marginTop: '10px', paddingLeft: '20px' }}>
                            {recipe.recipe.ingredientLines.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Container>
        </div>
    );
};

export default Recipes;