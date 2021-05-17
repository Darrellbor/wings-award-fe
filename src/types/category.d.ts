export default interface categoryInterface {
  _id: string;
  name: string;
  description: string;
  updatedAt: string;
  createdAt: string;
  nominees: {
    _id: string;
    name: string;
    image: string;
    socialHandle?: string;
    category: string;
    updatedAt: string;
    createdAt: string;
  };
}
