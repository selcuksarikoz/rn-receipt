interface IPopularSearch {
  title: string,
  rating: number
}

interface IUser {

}

interface IFoodItem {
  NER: string[];
	directions: string[];
	id: number;
	ingredients: string[];
	link: string;
	score: number;
	title: string;
}

interface IFoodItemRequest {
  text: string,
  limit: number
}