export default async function handler(req, res) {
    if (req.method !== 'POST') {
            // Parse the incoming JSON data
const data = JSON.parse(req.body);

    // Here, you would typically handle user creation, database interaction, and validation
    // Example: Create a user in your database
    // const newUser = await createUser(data);

    // For demonstration purposes, we'll assume the registration was successful
    // Replace this with your actual registration logic

    // Return the user's data
    const newUser = {
        username: data.username,
        email: data.email,
        age: data.age,
        weight: data.weight,
        goals: data.goals,
        dietaryRestrictions: data.dietaryRestrictions,
    };

        // Return a success response

    res.status(200).json(newUser);
} else {
    // Handle any other HTTP method
    res.status(405).end(); // Method Not Allowed

    }
}