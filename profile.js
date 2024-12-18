// User Profile Data
const userProfile = {
    name: "Rukia Gutale",
    age: 25,
    location: "Mogadishu, Somalia",
    profession: "Web Developer",
    profilePicture: "https://via.placeholder.com/100",
    bio: "Passionate about building modern web applications and exploring new technologies."
};

// Function to Render the Profile
function renderProfile(profile) {
    const profileDiv = document.getElementById("profile");

    profileDiv.innerHTML = `
        <img src="${profile.profilePicture}" alt="${profile.name}">
        <h2>${profile.name}</h2>
        <p><strong>Age:</strong> ${profile.age}</p>
        <p><strong>Location:</strong> ${profile.location}</p>
        <p><strong>Profession:</strong> ${profile.profession}</p>
        <p>${profile.bio}</p>
    `;
}

// Initialize the Profile Rendering
renderProfile(userProfile);
