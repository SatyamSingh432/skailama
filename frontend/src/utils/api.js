export const loginUser = async (email, password) => {
  const res = await fetch("/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  return res.json();
};

export const verifyToken = async (token) => {
  const res = await fetch("/api/auth/verify", {
    method: "GET",
    headers: { Authorization: token },
  });
  return res.json();
};
