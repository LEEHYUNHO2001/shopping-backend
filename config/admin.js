module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '67458a5f3ebad9fb1f6276a96a74d3d1'),
  },
});
