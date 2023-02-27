export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  discord: {
    token: process.env.DISCORD_TOKEN,
    clientId: process.env.DISCORD_CLIENT_ID,
  },
});
