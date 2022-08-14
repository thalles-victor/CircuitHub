export interface UserModel {
  id: number;
  name: string;
  about?: string;
  photo: string;
  createdAt: Date;
}