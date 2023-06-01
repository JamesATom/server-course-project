const getGitHubUserEmail = async (accessToken, profile) => {
    if (profile['_json'].email == null) {
        const res = await fetch('https://api.github.com/user/emails', { headers: { 'Authorization': `token ${accessToken}` } })
        const emails = await res.json()
        if (!emails || emails.length === 0) {
            return;
        }
        const sortedEmails = emails.sort((a, b) => b.primary - a.primary)
        profile.email = sortedEmails[0].email;
    }
}

module.exports = getGitHubUserEmail;