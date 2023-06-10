const getSocialMediaEmail = (profile) => {
    const email = profile['_json'].email;
    if (email) 
        return email;

    const gitHubEmail = profile.email;
    if (gitHubEmail)
        return gitHubEmail;
    return email;
}

module.exports = getSocialMediaEmail;