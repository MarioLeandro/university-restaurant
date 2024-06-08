export default interface ICreateUserDTO {
  name: string;
  email: string;
  manager: boolean;
  password: string;
  purchased: {
    dinner: number;
    lunch: number;
  };
}
