export class Review {
  constructor(
    public id: number,
    public WhiskeyName: string,
    public WhiskeyCountry: string,
    public WhiskeyType: string,
    public BottlePrice: number,
    public ImageSrc: string,
    public WhiskeyGrade: string,
    public Comments: string,
  ) {}
}
