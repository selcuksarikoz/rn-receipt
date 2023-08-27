interface IPopularSearch {
  title: string,
  rating: number
}

interface IUser {

}

interface IFoodItem {
  score: number;
  NER: string[];
  title: string;
  ingredients: string[];
  directions: string[];
  link: string;
  index: number;
}

interface IFoodItemRequest {
  text: string,
  limit: number
}