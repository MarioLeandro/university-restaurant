export const Role = {
  MANAGER: { name: "gestor", description: "Gestor" },
  VIEWER: { name: "visualizador", description: "Visualizador" },
} as const;
type IKey = keyof typeof Role;
export type IRole = (typeof Role)[IKey];

export const serverRoles = {
  ...Role,
};
