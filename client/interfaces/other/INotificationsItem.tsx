export interface INotificationsItem {
    username: string;
    image: string;
    status: boolean;
    postId: number;
    date: string;
    type:   'create' | 'update'
}
