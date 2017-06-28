export class Article implements IArticle {

  constructor(
    public $key: any,
    public id: number,
    public title: string,
    public created_at: Date,
    public expiryDate: number,
    public updated_at: Date,
    public draft: boolean,
    public promoted: boolean,
    public outdated: boolean,
    public comments_disabled: boolean,
    public user: {
      name: string,
      photo: {
        content_url: string
      }
    }
  ) { }

  get status(): string {
    const currentDate: number = Date.now();
    let status: string;

    if (!this.expiryDate || this.expiryDate==null ||this.expiryDate== undefined) {
      status = 'No expiry date!'
    } else {
      if (this.expiryDate < currentDate) {
        status = 'Expired'
      } else {
        if (this.expiryDate > currentDate && this.expiryDate < (currentDate + 1000 * 60 * 60 * 24 * 30)) {
          status = 'Expiring soon'
        } else {
          status = 'Okay'
        }
      }
    }
      return status
    }

  static fromJsonList(array): Article[] {

    return array.map(Article.fromJson);
  }

  static fromJson({ $key, id, title, created_at, expiryDate, updated_at, draft,
    promoted, outdated, comments_disabled, user }): Article {

    return new Article(
      $key, id, title, created_at, expiryDate, updated_at, draft,
      promoted, outdated, comments_disabled, user
    );
  }
}


export interface IArticle {
    id: number;
    title: string;
    expiryDate: number;
    draft: boolean;
    promoted: boolean;
}