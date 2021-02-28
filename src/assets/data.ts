import { Whiskey } from './models/whiskey';
import { Distillery } from './models/distillery';

export const allWhiskey: Whiskey[] = [
  {whiskeyId: 1, name: 'Glendiffich 12', distilleryId: 1, bottlePrice: 38.99, whiskeyType: 'Single Malt Scotch', bottleAge: 12},
  {whiskeyId: 2, name: 'Jack Daniels Tennessee Whiskey', distilleryId: 2, bottlePrice: 17.99, whiskeyType: 'Whiskey', bottleAge: null},
  {whiskeyId: 3, name: 'Classic Laddie', distilleryId: 3, bottlePrice: 50.00, whiskeyType: 'Single Malth Scotch', bottleAge: null},
  {whiskeyId: 4, name: 'Monkey Shoulder', distilleryId: 4, bottlePrice: 40.00, whiskeyType: 'Blended Malt Scotch', bottleAge: null},
  {whiskeyId: 5, name: 'Glenlivet 12', distilleryId: 5, bottlePrice: 32.99, whiskeyType: 'Single Malt Scotch', bottleAge: 12},
  {whiskeyId: 6, name: 'Screwball Peanut Butter Whiskey', distilleryId: 6, bottlePrice: 17.99, whiskeyType: 'Whiskey', bottleAge: null},
  {whiskeyId: 7, name: 'Glen Kirk Skeyside', distilleryId: 7, bottlePrice: 38.99, whiskeyType: 'Single Malt Scotch', bottleAge: null},
  {whiskeyId: 8, name: 'Woodford Reserve', distilleryId: 8, bottlePrice: 27.99, whiskeyType: 'Kentucky Bourbon', bottleAge: null},

];


export const allDistilleries: Distillery[] = [
  {distilleryId: 1, name: 'Glenfiddich', country: 'Scotland', region: 'Speyside', foundedYear: 1886, founderName: 'William Grant', latitude: 57.4550, longitude: -3.1290, websiteLink: 'https://www.glenfiddich.com/us/', logoPictureName: 'glenfiddich.jpg'},
  {distilleryId: 2, name: 'Jack Daniels\'', country: 'United States', region: 'Southeast', foundedYear: 1875, founderName: 'Jasper Newton \'Jack\' Daniel', latitude: 35.2840, longitude: -86.3680, websiteLink: 'https://www.jackdaniels.com/en-us', logoPictureName: 'jackdaniels.jpg'},
  {distilleryId: 3, name: 'Bruichladdich', country: 'Scotland', region: 'Islay', foundedYear: 1881, founderName: 'Harvey Brothers', latitude: 55.7650, longitude: -6.3620, websiteLink: 'https://www.bruichladdich.com/', logoPictureName: 'bruchladdich.jpg'},
  {distilleryId: 4, name: 'William Grant and Sons', country: 'Scotland', region: 'Speyside', foundedYear: 1881, founderName: 'William Grant', latitude: 57.4550, longitude: -3.1290, websiteLink: 'https://www.monkeyshoulder.com/', logoPictureName: 'monkeyshoulder.jpg'},
  {distilleryId: 5, name: 'Glenlivet', country: 'Scotland', region: 'Speyside', foundedYear: 1824, founderName: 'George Smith', latitude: 57.3420, longitude: -3.3350, websiteLink: 'https://www.theglenlivet.com/en-EN', logoPictureName: 'glenlivet.jpg'},
  {distilleryId: 6, name: 'Steven and Brittany Yeng', country: 'United States', region: 'West', foundedYear: 2018, founderName: 'Steven and Brittany Yeng', latitude: 32.7490, longitude: 117.2470, websiteLink: 'https://www.skrewballwhiskey.com/', logoPictureName: 'screwball.jpg'},
  {distilleryId: 7, name: 'Glen Kirk', country: 'Scotland', region: 'Speyside', foundedYear: 1880, founderName: 'Glen Kirk', latitude: null, longitude: null, websiteLink: null, logoPictureName: 'glenkirk.jpg'},
  {distilleryId: 8, name: 'Woodford Reserve', country: 'United States', region: 'Southeast', foundedYear: 1812, founderName: 'Elijah Pepper', latitude: 38.1130, longitude: 84.8130, websiteLink: null, logoPictureName: 'WoodfordReserve.jpg'},
]
