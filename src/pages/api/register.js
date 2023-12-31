// register.js
const { createUser } = require('../../utils/db');

export default async function handler(req, res) {
    if (req.method !== 'POST') {
            // Parse the incoming JSON data
            try {
                const data = JSON.parse(req.body);

                      // Validate the data (e.g., check for required fields)

      // Create the user record
      const newUser = createUser(data);

        // Return the user's data
        res.status(200).json(newUser);
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ error: 'Unable to register user' });
    }
} else {
    // Handle any other HTTP method
    res.status(405).end(); // Method Not Allowed
    }
}




    // Here, you would typically handle user creation, database interaction, and validation
    // Example: Create a user in your database
    // const newUser = await createUser(data);

    // For demonstration purposes, we'll assume the registration was successful
    // Replace this with your actual registration logic

    // Return the user's data
/*     const newUser = {
        username: data.username,
        email: data.email,
        age: data.age,
        weight: data.weight,
        goals: data.goals,
        dietaryRestrictions: data.dietaryRestrictions,
    };
 */