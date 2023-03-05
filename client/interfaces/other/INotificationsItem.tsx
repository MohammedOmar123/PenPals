export interface INotificationsItem {
    username: string;
    image: string;
    status: 'read' | 'unread';
    postId: number;
    type:   'create' | 'update'
}
