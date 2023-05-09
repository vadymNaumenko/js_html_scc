export default interface PostDto {
	title: string;
	body: string;
	userId?: number;
	tags?: string[];
	reactions?: number;
}
