const API_URL = "https://skailama-ez1j.onrender.com";

const token = localStorage.getItem("token");

export const loginUser = async (email, password) => {
  const res = await fetch(`${API_URL}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  return res.json();
};

export const verifyToken = async () => {
  const res = await fetch(`${API_URL}/api/auth/verify`, {
    method: "GET",
    headers: { Authorization: token },
  });
  return res.json();
};

export const registerUser = async (name, email, password) => {
  const res = await fetch(`${API_URL}/api/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password }),
  });
  return res.json();
};

export const createProject = async (name) => {
  const res = await fetch(`${API_URL}/api/projects`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: token },
    body: JSON.stringify({ name }),
  });
  return res.json();
};

export const getProjects = async () => {
  const res = await fetch(`${API_URL}/api/projects`, {
    method: "GET",
    headers: { Authorization: token },
  });
  return res.json();
};

export const getProjectById = async (projectId) => {
  const res = await fetch(`${API_URL}/api/projects/${projectId}`, {
    method: "GET",
    headers: { Authorization: token },
  });
  return res.json();
};

export const createFile = async (name, transcript, projectId) => {
  const res = await fetch(`${API_URL}/api/files`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: token },
    body: JSON.stringify({ name, transcript, project: projectId }),
  });
  return res.json();
};

export const getFiles = async (projectId) => {
  const res = await fetch(`${API_URL}/api/files/${projectId}`, {
    method: "GET",
    headers: { Authorization: token },
  });
  return res.json();
};

export const updateFile = async (fileId, transcript) => {
  const res = await fetch(`${API_URL}/api/files/${fileId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json", Authorization: token },
    body: JSON.stringify({ transcript }),
  });
  return res.json();
};
