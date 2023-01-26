import Shepherd from '../assets/Salads/Shepherd.png';
import MixGreen from '../assets/Salads/Mix_Green.jpg';

import ChickenVegetable from '../assets/Soups/Chicken_Vegetable.png';
import Lentil from '../assets/Soups/Lentil.png';

import MemoShishKebab from '../assets/Sandwiches/Memo_Shish_Kebab.png';

import LambGyro from '../assets/Sandwiches/Lamb_Gyro.png';
import ChickenGyro from '../assets/Sandwiches/Chicken_Gyro.png';
import ShishKebab from '../assets/Sandwiches/Shish_Kebab.png';
import MixLambChickenGyro from '../assets/Sandwiches/Mix_Lamb_Chicken_Gyro.png';
import AdanaKebab from '../assets/Sandwiches/Adana_Kebab.png';
import ChickenAdana from '../assets/Sandwiches/Chicken_Adana.png';
import Falafel from '../assets/Sandwiches/Falafel_PCS.png';
import GrilledChicken from '../assets/Sandwiches/Grilled_Chicken.png';
import ChickenKebab from '../assets/Sandwiches/Chicken_Kebab.png';
import GrilledZucchini from '../assets/Sandwiches/Shish_Kebab.png';

import GrapeLeaves from '../assets/ColdAppetizers/Grape_Leaves.png';
import Hummus from '../assets/ColdAppetizers/Hummus.png';
import EggplantSalad from '../assets/ColdAppetizers/Eggplant_Salad.png';
import Babaghanoush from '../assets/ColdAppetizers/Babaghanoush.png';
import Piyaz from '../assets/ColdAppetizers/Piyaz.png';
import Tabule from '../assets/ColdAppetizers/Tabule.png';
import BeetSalad from '../assets/ColdAppetizers/Beet_Salad.png';
import EggplantSpread from '../assets/ColdAppetizers/Eggplant_Spread.png';
import SpicyMezze from '../assets/ColdAppetizers/Spicy_Mezze.png';

import FrenchFries from '../assets/HotAppetizers/French_Fries.png';
import Rice from '../assets/HotAppetizers/Rice.png';
import CigaretteBorek from '../assets/HotAppetizers/Cigarette_Borek.png';
import FalafelPlate from '../assets/HotAppetizers/Falafel_Plate.png';
import ZucchiniPancake from '../assets/HotAppetizers/Zucchini_Pancake.png';

import MixChickenKebabChickenGyro from '../assets/CombinationPlatters/Mix_Chicken_Kebab_Chicken_Gyro.png';
import MixChickenKebabLambGyro from '../assets/CombinationPlatters/Mix_Chicken_Kebab_Lamb_Gyro.png';
import MixAdanaKebabLambGyro from '../assets/CombinationPlatters/Mix_Adana_Kebab_Lamb_Gyro.png';
import MixShishKebabChickenGyro from '../assets/CombinationPlatters/Mix_Shish_Kebab_Chicken_Gyro.png';
import MixShishKebabAndLambGyro from '../assets/CombinationPlatters/Mix_Shish_Kebab_And_Lamb_Gyro.png';
import MixChickenAdanaLambAdanaKebab from '../assets/CombinationPlatters/Mix_Chicken_Adana_Lamb_Adana_Kebab.png';
import MixChickenKebabAdanaKebab from '../assets/CombinationPlatters/Mix_Chicken_Kebab_Adana_Kebab.png';
import MixShishChickenAdanaKebab from '../assets/CombinationPlatters/Mix_Shish_Chicken_Adana_Kebab.png';
import MixChickenKebabChickenAdana from '../assets/CombinationPlatters/Mix_Chicken_Kebab_Chicken_Adana.png';

import SpecialMemoShishKebab from '../assets/Entrees/Special_Memo_Shish_Kebab.png';
import LambShishKebab from '../assets/Entrees/Lamb_Shish_Kebab.png';
import EChickenKebab from '../assets/Entrees/Chicken_Kebab.png';
import ELambGyro from '../assets/Entrees/Lamb_Gyro.png';
import EMixLambChickenGyro from '../assets/Entrees/Mix_Lamb_Chicken_Gyro.png';
import EGrilledChicken from '../assets/Entrees/Grilled_Chicken.png';
import LambChops from '../assets/Entrees/Lamb_Chops.png';
import EChickenGyro from '../assets/Entrees/Chicken_Gyro.png';
import MixGrill from '../assets/Entrees/Mix_Grill.png';

import Baklava from '../assets/Dessert/Baklava.png';
import BrownTopPudding from '../assets/Dessert/Brown_Top_Pudding.png';
import RicePudding from '../assets/Dessert/Rice_Pudding.png';
import PistachioRolls from '../assets/Dessert/Pistachio_Rolls.png';
import Kadayif from '../assets/Dessert/Kadayif.png';
import StrawberryCheesecake from '../assets/Dessert/Strawberry_Cheesecake.png';
import VanillaPudding from '../assets/Dessert/Vanilla_Pudding.png';


import WaterPolandSpring from '../assets/Beverages/Water_Poland_Spring.jpeg';
import TurkishJuice from '../assets/Beverages/Turkish_Juice.png';
import Sodas from '../assets/Beverages/Sodas.png';
import Snapple from '../assets/Beverages/Snapple.png';
import Coffee from '../assets/Beverages/Coffee.png';
import Tea from '../assets/Beverages/Tea.png';
import Ayran from '../assets/Beverages/Ayran.jpg';

export const categoryList = [
    //Salads
    {
        name: "Salads",
        items: [
            {
                img: Shepherd,
                name: 'Shepherd Salad',
                size: {
                    'small': {
                        price: 7.5,
                        amount: null
                    },
                    'large': {
                        price: 10.95,
                        amount: null
                    },
                    'reg': null,
                    'normal' : null
                },
                option: {
                    'feta-cheese': {
                        name : 'Feta Cheese',
                        price: 2,
                        amount: null
                    }
                },
                extra: null
            },
            {
                img: MixGreen,
                name: 'Mix Green Salad',
                size: {
                    'small': {
                        price: 7.5,
                        amount: null
                    },
                    'large': {
                        price: 10.95,
                        amount: null
                    },
                    'reg': null,
                    'normal' : null
                },
                option: {
                    'feta_cheese': {
                        name : 'Feta Cheese',
                        price: 2,
                        amount: null
                    }
                },
                extra: null
            },
        ]
    },
    //Soup
    {
        name: 'Soups',
        items: [
            {
                img: ChickenVegetable,
                name: 'Chicken Vegetable',
                size: {
                    'small': null,
                    'large': null,
                    'reg' : null,
                    'normal': {
                        price: 6.95,
                        amount: null
                    }
                },
                option: null,
                extra: null
            },
            {
                img: Lentil,
                name: 'Lentil',
                size: {
                    'small': null,
                    'large': null,
                    'normal': {
                        price: 6.95,
                        amount: null
                    },
                    'reg' : null
                },
                option: null,
                extra: null
            },
        ]
    },
    //Sandwitch
    {
        name: "Sandwiches",
        items: [
            {
                img: MemoShishKebab,
                name: 'Memo Shish Kebab',
                size: {
                    'small': {
                        price : 9.95,
                        amount : null
                    },
                    'large': {
                        price: 10.95
                    },
                    'reg': null,
                    'normal' : null
                },
                option: {
                    'pita': {
                    	name : 'PITA',
                        price: 8.95,
                        amount: null
                    },
                    'wrap': {
                        name : 'WRAP',
                        price: 9.95,
                        amount: null
                    },
                    'turkish_bread': {
                        name : 'TURKISH BREAD',
                        price: 9.95,
                        amount: null
                    }
                },
                extra: {
                    'hummus': {
                        name : 'Hummus',
                        price: 1,
                        amount: null
                    },
                    'bababhanoush': {
                        name : 'Bababhanoush',
                        price: 1,
                        amount: null
                    },
                    'carot_mezze': {
                        name : 'CarotMezze',
                        price: 1,
                        amount: null
                    },
                    'spicy_mezze': {
                        name : 'Spciy Mezze',
                        price: 1,
                        amount: null
                    },
                    'eggplant_spread': {
                        name : 'Eggplant Spread',
                        price: 1,
                        amount: null
                    },
                }
            },
            {
                img: LambGyro,
                name: 'Lamb Gyro',
                size: {
                    'small': {
                        price : 8.95,
                        amount : null
                    },
                    'large' : {
                        price : 9.95,
                        amount : null
                    },
                    'normal': null,
                    'reg': null
                },
                option: {
                    'pita': {
                        name : 'PITA',
                        price: 8.95,
                        amount: null
                    },
                    'wrap': {
                        name : 'WRAP',
                        price: 9.95,
                        amount: null
                    },
                    'turkish_bread': {
                        name : "TURKISH BREAD",
                        price: 9.95,
                        amount: null
                    }
                },
                extra: {
                    'hummus': {
                        name : 'Hummus',
                        price: 1,
                        amount: null
                    },
                    'bababhanoush': {
                        name : 'Bababhanoush',
                        price: 1,
                        amount: null
                    },
                    'carot_mezze': {
                        name : 'Carot Mezze',
                        price: 1,
                        amount: null
                    },
                    'spicy_mezze': {
                        name : 'Spicy Mezze',
                        price: 1,
                        amount: null
                    },
                    'eggplant_spread': {
                        name : 'Eggplant Spread',
                        price: 1,
                        amount: null
                    },
                }
            },
            {
                img: ChickenGyro,
                name: 'Chicken Gyro',
                size: {
                    'small': {
                        price : 8.95,
                        amount : null
                    },
                    'large' : {
                        price : 9.95,
                        amount : null
                    },
                    'normal': null,
                    'reg': null
                },
                option: {
                    'pita': {
                        name : 'PITA',
                        price: 8.95,
                        amount: null
                    },
                    'wrap': {
                        name : 'WRAP',
                        price: 9.95,
                        amount: null
                    },
                    'turkish_bread': {
                        name : 'TURKISH BREAD',
                        price: 9.95,
                        amount: null
                    }
                },
                extra: {
                    'hummus': {
                        name : 'Hummus',
                        price: 1,
                        amount: null
                    },
                    'bababhanoush': {
                        name : 'Bababhanoush',
                        price: 1,
                        amount: null
                    },
                    'carot_mezze': {
                        name : 'Carot Mezze',
                        price: 1,
                        amount: null
                    },
                    'spicy_mezze': {
                        name : 'Spicy Mezze',
                        price: 1,
                        amount: null
                    },
                    'eggplant_spread': {
                        name : 'Eggplant Spread',
                        price: 1,
                        amount: null
                    },
                }
            },
            {
                img: ShishKebab,
                name: 'Shish Kebab',
                size: {
                    'small': {
                        price : 9.95,
                        amount : null
                    },
                    'large' : {
                        price : 10.95,
                        amount : null
                    },
                    'normal': null,
                    'reg': null
                },
                option: {
                    'pita': {
                        name : 'PITA',
                        price: 8.95,
                        amount: null
                    },
                    'wrap': {
                        name : 'WRAP',
                        price: 9.95,
                        amount: null
                    },
                    'turkish_bread': {
                        name : 'TURKISH BREAD',
                        price: 9.95,
                        amount: null
                    }
                },
                extra: {
                    'hummus': {
                        name : 'Hummus',
                        price: 1,
                        amount: null
                    },
                    'ababhanoush': {
                        name : 'Bababhanoush',
                        price: 1,
                        amount: null
                    },
                    'carot_mezze': {
                        name : 'Carot Mezze',
                        price: 1,
                        amount: null
                    },
                    'spicy_mezze': {
                        name : 'Spicy Mezze',
                        price: 1,
                        amount: null
                    },
                    'eggplant_spread': {
                        name : 'Eggplant Spread',
                        price: 1,
                        amount: null
                    },
                }
            },
            {
                img: MixLambChickenGyro,
                name: 'Mix Lamb Chicken Gyro',
                size: {
                    'small': null,
                    'large': null,
                    'reg': null,
                    'normal' : {
                        price : 13.2,
                        amount : null
                    }
                },
                option: {
                    'pita': {
                        name : 'PITA',
                        price: 8.95,
                        amount: null
                    },
                    'wrap': {
                        name : 'WRAP',
                        price: 9.95,
                        amount: null
                    },
                    'turkish_bread': {
                        name : 'TURKISH BREAD',
                        price: 9.95,
                        amount: null
                    }
                },
                extra: {
                    'hummus': {
                        name : 'Hummus',
                        price: 1,
                        amount: null
                    },
                    'bababhanoush': {
                        name : 'Bababhanoush',
                        price: 1,
                        amount: null
                    },
                    'carot_mezze': {
                        name : 'Carot Mezze',
                        price: 1,
                        amount: null
                    },
                    'spicy_mezze': {
                        name : 'Spicy Mezze',
                        price: 1,
                        amount: null
                    },
                    'eggplant_spread': {
                        name : 'Eggplant Spread',
                        price: 1,
                        amount: null
                    },
                }
            },
            {
                img: AdanaKebab,
                name: 'Adana Kebab',
                size: {
                    'small': {
                        price : 9.95,
                        amount : null
                    },
                    'large' : {
                        price : 10.95,
                        amount : null
                    },
                    'normal': null,
                    'reg': null
                },
                
                
                option: {
                    'pita': {
                        name : 'PITA',
                        price: 8.95,
                        amount: null
                    },
                    'wrap': {
                        name : 'WRAP',
                        price: 9.95,
                        amount: null
                    },
                    'turkish_bread': {
                        name : 'TURKISH BREAD',
                        price: 9.95,
                        amount: null
                    }
                },
                
                extra : {
                    'hummus': {
                        name : 'Hummus',
                        price: 1,
                        amount: null
                    },
                    'ababhanoush': {
                        name : 'Bababhanoush',
                        price: 1,
                        amount: null
                    },
                    'carot_mezze': {
                        name : 'Carot Mezze',
                        price: 1,
                        amount: null
                    },
                    'spicy_mezze': {
                        name : 'Spicy Mezze',
                        price: 1,
                        amount: null
                    },
                    'eggplant_spread': {
                        name : 'Eggplant Spread',
                        price: 1,
                        amount: null
                    },
                }                
            },
            {
                img: ChickenAdana,
                name: 'Chicken Kebab',
                size: {
                    'small': {
                        price : 9.95,
                        amount : null
                    },
                    'large' : {
                        price : 10.95,
                        amount : null
                    },
                    'normal': null,
                    'reg': null
                },
                
                
                option: {
                    'pita': {
                        name : 'PITA',
                        price: 8.95,
                        amount: null
                    },
                    'wrap': {
                        name : 'WRAP',
                        price: 9.95,
                        amount: null
                    },
                    'turkish_bread': {
                        name : 'TURKISH BREAD',
                        price: 9.95,
                        amount: null
                    }
                },
                
                extra : {
                    'hummus': {
                        name : 'Hummus',
                        price: 1,
                        amount: null
                    },
                    'ababhanoush': {
                        name : 'Bababhanoush',
                        price: 1,
                        amount: null
                    },
                    'carot_mezze': {
                        name : 'Carot Mezze',
                        price: 1,
                        amount: null
                    },
                    'spicy_mezze': {
                        name : 'Spicy Mezze',
                        price: 1,
                        amount: null
                    },
                    'eggplant_spread': {
                        name : 'Eggplant Spread',
                        price: 1,
                        amount: null
                    },
                }                
            },
            {
                img: Falafel,
                name: 'Falafel (4 PCS)',
                size: {
                    'small': {
                        price : 7.95,
                        amount : null
                    },
                    'large' : {
                        price : 8.95,
                        amount : null
                    },
                    'normal': null,
                    'reg': null
                },
                
                
                option: {
                    'pita': {
                        name : 'PITA',
                        price: 8.95,
                        amount: null
                    },
                    'wrap': {
                        name : 'WRAP',
                        price: 9.95,
                        amount: null
                    },
                    'turkish_bread': {
                        name : 'TURKISH BREAD',
                        price: 9.95,
                        amount: null
                    }
                },
                
                extra : {
                    'hummus': {
                        name : 'Hummus',
                        price: 1,
                        amount: null
                    },
                    'ababhanoush': {
                        name : 'Bababhanoush',
                        price: 1,
                        amount: null
                    },
                    'carot_mezze': {
                        name : 'Carot Mezze',
                        price: 1,
                        amount: null
                    },
                    'spicy_mezze': {
                        name : 'Spicy Mezze',
                        price: 1,
                        amount: null
                    },
                    'eggplant_spread': {
                        name : 'Eggplant Spread',
                        price: 1,
                        amount: null
                    },
                }
                
            },
            {
                img: GrilledChicken,
                name: 'Grilled Chicken',
                size: {
                    'small': {
                        price : 8.95,
                        amount : null
                    },
                    'large' : {
                        price : 9.95,
                        amount : null
                    },
                    'normal': null,
                    'reg': null
                },
                
                
                option: {
                    'pita': {
                        name : 'PITA',
                        price: 8.95,
                        amount: null
                    },
                    'wrap': {
                        name : 'WRAP',
                        price: 9.95,
                        amount: null
                    },
                    'turkish_bread': {
                        name : 'TURKISH BREAD',
                        price: 9.95,
                        amount: null
                    }
                },
                
                extra : {
                    'hummus': {
                        name : 'Hummus',
                        price: 1,
                        amount: null
                    },
                    'ababhanoush': {
                        name : 'Bababhanoush',
                        price: 1,
                        amount: null
                    },
                    'carot_mezze': {
                        name : 'Carot Mezze',
                        price: 1,
                        amount: null
                    },
                    'spicy_mezze': {
                        name : 'Spicy Mezze',
                        price: 1,
                        amount: null
                    },
                    'eggplant_spread': {
                        name : 'Eggplant Spread',
                        price: 1,
                        amount: null
                    },
                }
                
            },
            {
                img: ChickenKebab,
                name: 'Chicken Kebab',
                size: {
                    'small': {
                        price : 9.95,
                        amount : null
                    },
                    'large' : {
                        price : 10.95,
                        amount : null
                    },
                    'normal': null,
                    'reg': null
                },
                
                
                option: {
                    'pita': {
                        name : 'PITA',
                        price: 8.95,
                        amount: null
                    },
                    'wrap': {
                        name : 'WRAP',
                        price: 9.95,
                        amount: null
                    },
                    'turkish_bread': {
                        name : 'TURKISH BREAD',
                        price: 9.95,
                        amount: null
                    }
                },
                
                extra : {
                    'hummus': {
                        name : 'Hummus',
                        price: 1,
                        amount: null
                    },
                    'ababhanoush': {
                        name : 'Bababhanoush',
                        price: 1,
                        amount: null
                    },
                    'carot_mezze': {
                        name : 'Carot Mezze',
                        price: 1,
                        amount: null
                    },
                    'spicy_mezze': {
                        name : 'Spicy Mezze',
                        price: 1,
                        amount: null
                    },
                    'eggplant_spread': {
                        name : 'Eggplant Spread',
                        price: 1,
                        amount: null
                    },
                }
                
            },
            {
                img: GrilledZucchini,
                name: 'Grilled Zucchini (2)',
                size: {
                    'small': {
                        price : 9.95,
                        amount : null
                    },
                    'large' : {
                        price : 10.95,
                        amount : null
                    },
                    'normal': null,
                    'reg': null
                },
                
                
                option: {
                    'pita': {
                        name : 'PITA',
                        price: 8.95,
                        amount: null
                    },
                    'wrap': {
                        name : 'WRAP',
                        price: 9.95,
                        amount: null
                    },
                    'turkish_bread': {
                        name : 'TURKISH BREAD',
                        price: 9.95,
                        amount: null
                    }
                },
                
                extra : {
                    'hummus': {
                        name : 'Hummus',
                        price: 1,
                        amount: null
                    },
                    'ababhanoush': {
                        name : 'Bababhanoush',
                        price: 1,
                        amount: null
                    },
                    'carot_mezze': {
                        name : 'Carot Mezze',
                        price: 1,
                        amount: null
                    },
                    'spicy_mezze': {
                        name : 'Spicy Mezze',
                        price: 1,
                        amount: null
                    },
                    'eggplant_spread': {
                        name : 'Eggplant Spread',
                        price: 1,
                        amount: null
                    },
                }
                
            }
        ]
    },
    //ColdAppetizers
    {
        name: 'Cold Appetizers',
        items: [
            {
                img: GrapeLeaves,
                name: 'Grape Leaves',
                size: {
                    'small': null,
                    'large': null,
                    'normal': {
                        price: 7.5,
                        amount: null
                    },
                    'reg' : null
                },
                option: null,
                extra: null
            },
            {
                img: Hummus,
                name: 'Hummus',
                size: {
                    'small': null,
                    'large': {
                        price: 11.95,
                        amount: null
                    },
                    'reg': {
                        price: 6.5,
                        amount: null
                    },
                    'normal' : null
                },
                option: null,
                extra: null
            },
            {
                img: EggplantSalad,
                name: 'Eggplant Salad',
                size: {
                    'small': null,
                    'large': {
                        price: 14,
                        amount: null
                    },
                    'reg': {
                        price: 7.5,
                        amount: null
                    },
                    'normal' : null
                },
                option: null,
                extra: null
            },
            {
                img: Babaghanoush,
                name: 'Babaghanoush',
                size: {
                    'small': null,
                    'large': {
                        price: 14,
                        amount: null
                    },
                    'reg': {
                        price: 7.5,
                        amount: null
                    },
                    'normal' : null
                },
                option: null,
                extra: null
            },
            {
                img: Piyaz,
                name: 'Piyaz',
                size: {
                    'small': null,
                    'large': {
                        price: 14,
                        amount: null
                    },
                    'reg': {
                        price: 7.5,
                        amount: null
                    },
                    'normal' : null
                },
                option: null,
                extra: null
            },
            {
                img: Tabule,
                name: 'Tabule',
                size: {
                    'small': null,
                    'large': {
                        price: 14,
                        amount: null
                    },
                    'reg': {
                        price: 7.5,
                        amount: null
                    },
                    'normal' : null
                },
                option: null,
                extra: null
            },
            {
                img: BeetSalad,
                name: 'Beet Salad',
                size: {
                    'small': null,
                    'large': {
                        price: 14,
                        amount: null
                    },
                    'reg': {
                        price: 7.5,
                        amount: null
                    },
                    'normal' : null
                },
                option: null,
                extra: null
            },
            {
                img: EggplantSpread,
                name: 'Eggplant Spread',
                size: {
                    'small': null,
                    'large': {
                        price: 14,
                        amount: null
                    },
                    'reg': {
                        price: 7.5,
                        amount: null
                    },
                    'normal' : null
                },
                option: null,
                extra: null
            },
            {
                img: SpicyMezze,
                name: 'Spicy Mezze',
                size: {
                    'small': null,
                    'large': {
                        price: 14,
                        amount: null
                    },
                    'reg': {
                        price: 7.5,
                        amount: null
                    },
                    'normal' : null
                },
                option: null,
                extra: null
            },
        ]
    },
    //HotAppetizers
    {
        name: 'Hot Appetizers',
        items: [
            {
                img: FrenchFries,
                name: 'French Fries',
                size: {
                    'small': null,
                    'large': null,
                    'normal': {
                        price: 5.95,
                        amount: null
                    },
                    'reg' : null
                },
                option: null,
                extra: null

            },
            {
                img: Rice,
                name: 'Rice',
                size: {
                    'small': null,
                    'large': {
                        price: 5.95,
                        amount: null
                    },
                    'reg': {
                        price: 3.5,
                        amount: null
                    }
                },
                option: null,
                extra: null
            },
            {
                img: CigaretteBorek,
                name: 'Cigarette Borek',
                size: {
                    'small': null,
                    'large': null,
                    'normal': {
                        price: 9,
                        amount: null
                    },
                    reg : null
                },
                option: null,
                extra: null
            },
            {
                img: FalafelPlate,
                name: 'Falafel Plate',
                size: {
                    'small': null,
                    'large': null,
                    'reg': {
                        price: 9.95,
                        amount: null
                    },
                    reg : null
                },
                extra: {
                    "extra_falafel" : {
                        name : "Extra Falafel",
                        price: 2,
                        amount : null
                    }
                },
                option: null,
            },
            {
                img: ZucchiniPancake,
                name: 'Zucchini Pancake',
                size: {
                    'small': null,
                    'large': null,
                    'normal': {
                        price: 14,
                        amount: null
                    },
                    reg : null
                },
                extra: {
                    "extra_falafel" : {
                        name : "Extra Falafel",
                        price: 2.5,
                        amount : null
                    }
                },
                option: null,
            }
        ]
    },
    //CombinationPlatters
    {
        name: 'Combination Platters',
        items: [
            {
                img: MixChickenKebabChickenGyro,
                name: 'Mix Chicken Kebab & Chicken Gyro',
                size: {
                    'small': null,
                    'large': null,
                    'normal': {
                        price: 5.95,
                        amount: null
                    },
                    reg : null
                },
                option: null,
                extra: {
                    'hot_sauce': {
                        name : 'Hot Sauce',
                        price: 0.25,
                        amount: null
                    },
                    'white_sauce': {
                        name : 'White Sauce',
                        price: 0.25,
                        amount: null
                    },
                    'tahini_sauce': {
                        name : 'Tahini Sauce',
                        price: 0.5,
                        amount: null
                    },
                    'turkish_Bread': {
                        name : 'Turkish Bread',
                        price: 1,
                        amount: null
                    },
                    'feta_cheese': {
                        name : 'Feta Cheese',
                        price: 2.5,
                        amount: null
                    },
                }
            },
            {
                img: MixChickenKebabLambGyro,
                name: 'Mix Chicken Kebab & Lamb Gyro',
                size: {
                    'small': null,
                    'large': null,
                    'normal': {
                        price: 5.95,
                        amount: null
                    },
                    reg : null
                },
                option: null,
                extra: {
                    'hot_sauce': {
                        name : 'Hot Sauce',
                        price: 0.25,
                        amount: null
                    },
                    'white_sauce': {
                        name : 'White Sauce',
                        price: 0.25,
                        amount: null
                    },
                    'tahini_sauce': {
                        name : 'Tahini Sauce',
                        price: 0.5,
                        amount: null
                    },
                    'turkish_Bread': {
                        name : 'Turkish Bread',
                        price: 1,
                        amount: null
                    },
                    'feta_cheese': {
                        name : 'Feta Cheese',
                        price: 2.5,
                        amount: null
                    },
                }
            },
            {
                img: MixAdanaKebabLambGyro,
                name: 'Mix Chicken Kebab & Lamb Gyro',
                size: {
                    'small': null,
                    'large': null,
                    'normal': {
                        price: 5.95,
                        amount: null
                    },
                    reg : null
                },
                option: null,
                extra: {
                    'hot_sauce': {
                        name : 'Hot Sauce',
                        price: 0.25,
                        amount: null
                    },
                    'white_sauce': {
                        name : 'White Sauce',
                        price: 0.25,
                        amount: null
                    },
                    'tahini_sauce': {
                        name : 'Tahini Sauce',
                        price: 0.5,
                        amount: null
                    },
                    'turkish_Bread': {
                        name : 'Turkish Bread',
                        price: 1,
                        amount: null
                    },
                    'feta_cheese': {
                        name : 'Feta Cheese',
                        price: 2.5,
                        amount: null
                    },
                }
            },
            {
                img: MixShishKebabChickenGyro,
                name: 'Mix Shish Kebab & Chicken Gyro',
                size: {
                    'small': null,
                    'large': null,
                    'normal': {
                        price: 5.95,
                        amount: null
                    },
                    reg : null
                },
                option: null,
                extra: {
                    'hot_sauce': {
                        name : 'Hot Sauce',
                        price: 0.25,
                        amount: null
                    },
                    'white_sauce': {
                        name : 'White Sauce',
                        price: 0.25,
                        amount: null
                    },
                    'tahini_sauce': {
                        name : 'Tahini Sauce',
                        price: 0.5,
                        amount: null
                    },
                    'turkish_Bread': {
                        name : 'Turkish Bread',
                        price: 1,
                        amount: null
                    },
                    'feta_cheese': {
                        name : 'Feta Cheese',
                        price: 2.5,
                        amount: null
                    },
                }
            },
            {
                img: MixShishKebabAndLambGyro,
                name: 'Mix Chicken Adana & Lamb Adana Kebab',
                size: {
                    'small': null,
                    'large': null,
                    'normal': {
                        price: 5.95,
                        amount: null
                    },
                    reg : null
                },
                option: null,
                extra: {
                    'hot_sauce': {
                        name : 'Hot Sauce',
                        price: 0.25,
                        amount: null
                    },
                    'white_sauce': {
                        name : 'White Sauce',
                        price: 0.25,
                        amount: null
                    },
                    'tahini_sauce': {
                        name : 'Tahini Sauce',
                        price: 0.5,
                        amount: null
                    },
                    'turkish_Bread': {
                        name : 'Turkish Bread',
                        price: 1,
                        amount: null
                    },
                    'feta_cheese': {
                        name : 'Feta Cheese',
                        price: 2.5,
                        amount: null
                    },
                }
            },
            {
                img: MixChickenAdanaLambAdanaKebab,
                name: 'Mix Chicken Kebab & Adana Kebab',
                size: {
                    'small': null,
                    'large': null,
                    'normal': {
                        price: 5.95,
                        amount: null
                    },
                    reg : null
                },
                option: null,
                extra: {
                    'hot_sauce': {
                        name : 'Hot Sauce',
                        price: 0.25,
                        amount: null
                    },
                    'white_sauce': {
                        name : 'White Sauce',
                        price: 0.25,
                        amount: null
                    },
                    'tahini_sauce': {
                        name : 'Tahini Sauce',
                        price: 0.5,
                        amount: null
                    },
                    'turkish_Bread': {
                        name : 'Turkish Bread',
                        price: 1,
                        amount: null
                    },
                    'feta_cheese': {
                        name : 'Feta Cheese',
                        price: 2.5,
                        amount: null
                    },
                }
            },
            {
                img: MixChickenKebabAdanaKebab,
                name: 'Mix Shish & Chicken Adana Kebab',
                size: {
                    'small': null,
                    'large': null,
                    'normal': {
                        price: 5.95,
                        amount: null
                    },
                    reg : null
                },
                option: null,
                extra: {
                    'hot_sauce': {
                        name : 'Hot Sauce',
                        price: 0.25,
                        amount: null
                    },
                    'white_sauce': {
                        name : 'White Sauce',
                        price: 0.25,
                        amount: null
                    },
                    'tahini_sauce': {
                        name : 'Tahini Sauce',
                        price: 0.5,
                        amount: null
                    },
                    'turkish_Bread': {
                        name : 'Turkish Bread',
                        price: 1,
                        amount: null
                    },
                    'feta_cheese': {
                        name : 'Feta Cheese',
                        price: 2.5,
                        amount: null
                    },
                }
            },
            {
                img: MixShishChickenAdanaKebab,
                name: 'Mix Shish & Adana Kebab',
                size: {
                    'small': null,
                    'large': null,
                    'normal': {
                        price: 5.95,
                        amount: null
                    },
                    reg : null
                },
                option: null,
                extra: {
                    'hot_sauce': {
                        name : 'Hot Sauce',
                        price: 0.25,
                        amount: null
                    },
                    'white_sauce': {
                        name : 'White Sauce',
                        price: 0.25,
                        amount: null
                    },
                    'tahini_sauce': {
                        name : 'Tahini Sauce',
                        price: 0.5,
                        amount: null
                    },
                    'turkish_Bread': {
                        name : 'Turkish Bread',
                        price: 1,
                        amount: null
                    },
                    'feta_cheese': {
                        name : 'Feta Cheese',
                        price: 2.5,
                        amount: null
                    },
                }
            },
            {
                img: MixShishChickenAdanaKebab,
                name: 'Mix Shish & Chicken Kebab',
                size: {
                    'small': null,
                    'large': null,
                    'normal': {
                        price: 5.95,
                        amount: null
                    },
                    reg : null
                },
                option: null,
                extra: {
                    'hot_sauce': {
                        name : 'Hot Sauce',
                        price: 0.25,
                        amount: null
                    },
                    'white_sauce': {
                        name : 'White Sauce',
                        price: 0.25,
                        amount: null
                    },
                    'tahini_sauce': {
                        name : 'Tahini Sauce',
                        price: 0.5,
                        amount: null
                    },
                    'turkish_Bread': {
                        name : 'Turkish Bread',
                        price: 1,
                        amount: null
                    },
                    'feta_cheese': {
                        name : 'Feta Cheese',
                        price: 2.5,
                        amount: null
                    },
                }
            },
        ]
    },
    //Entrees
    {
        name: 'Entrees',
        items: [
            {
                img: SpecialMemoShishKebab,
                name: 'Special Memo Shish Kebab',
                size: {
                    'small': {
                        price : 15,
                        amount : null
                    },
                    'large': {
                        price : 21,
                        amount : null
                    },
                    'reg': null,
                    normal : null
                },
                option: null,
                extra: {
                    'hot_sauce': {
                        name : 'Hot Sauce',
                        price: 0.25,
                        amount: null
                    },
                    'white_sauce': {
                        name : 'White Sauce',
                        price: 0.25,
                        amount: null
                    },
                    'tahini_sauce': {
                        name : 'Tahini Sauce',
                        price: 0.5,
                        amount: null
                    },
                    'turkish_Bread': {
                        name : 'Turkish Bread',
                        price: 1,
                        amount: null
                    },
                    'feta_cheese': {
                        name : 'Feta Cheese',
                        price: 2.5,
                        amount: null
                    },
                }
            },
            {
                img: LambShishKebab,
                name: 'Lamb Shish Kebab',
                size: {
                    'small': {
                        price : 15,
                        amount : null
                    },
                    'large': {
                        price : 21,
                        amount : null
                    },
                    'reg': null,
                    normal : null
                },
                option: null,
                extra: {
                    'hot_sauce': {
                        name : 'Hot Sauce',
                        price: 0.25,
                        amount: null
                    },
                    'white_sauce': {
                        name : 'White Sauce',
                        price: 0.25,
                        amount: null
                    },
                    'tahini_sauce': {
                        name : 'Tahini Sauce',
                        price: 0.5,
                        amount: null
                    },
                    'turkish_Bread': {
                        name : 'Turkish Bread',
                        price: 1,
                        amount: null
                    },
                    'feta_cheese': {
                        name : 'Feta Cheese',
                        price: 2.5,
                        amount: null
                    },
                }
            },
            {
                img: ChickenKebab,
                name: 'Chicken Kebab',
                size: {
                    'small': {
                        price : 15,
                        amount : null
                    },
                    'large': {
                        price : 21,
                        amount : null
                    },
                    'reg': null,
                    normal : null
                },
                option: null,
                extra: {
                    'hot_sauce': {
                        name : 'Hot Sauce',
                        price: 0.25,
                        amount: null
                    },
                    'white_sauce': {
                        name : 'White Sauce',
                        price: 0.25,
                        amount: null
                    },
                    'tahini_sauce': {
                        name : 'Tahini Sauce',
                        price: 0.5,
                        amount: null
                    },
                    'turkish_Bread': {
                        name : 'Turkish Bread',
                        price: 1,
                        amount: null
                    },
                    'feta_cheese': {
                        name : 'Feta Cheese',
                        price: 2.5,
                        amount: null
                    },
                }
            },
            {
                img: LambGyro,
                name: 'Lamb Gyro',
                size: {
                    'small': {
                        price : 15,
                        amount : null
                    },
                    'large': {
                        price : 21,
                        amount : null
                    },
                    'reg': null,
                    normal : null
                },
                option: null,
                extra: {
                    'hot_sauce': {
                        name : 'Hot Sauce',
                        price: 0.25,
                        amount: null
                    },
                    'white_sauce': {
                        name : 'White Sauce',
                        price: 0.25,
                        amount: null
                    },
                    'tahini_sauce': {
                        name : 'Tahini Sauce',
                        price: 0.5,
                        amount: null
                    },
                    'turkish_Bread': {
                        name : 'Turkish Bread',
                        price: 1,
                        amount: null
                    },
                    'feta_cheese': {
                        name : 'Feta Cheese',
                        price: 2.5,
                        amount: null
                    },
                }
            },
            {
                img: MixLambChickenGyro,
                name: 'Mix Lamb Chicken Gyro',
                size: {
                    'small': {
                        price : 15,
                        amount : null
                    },
                    'large': {
                        price : 21,
                        amount : null
                    },
                    'reg': null,
                    normal : null
                },
                option: null,
                extra: {
                    'hot_sauce': {
                        name : 'Hot Sauce',
                        price: 0.25,
                        amount: null
                    },
                    'white_sauce': {
                        name : 'White Sauce',
                        price: 0.25,
                        amount: null
                    },
                    'tahini_sauce': {
                        name : 'Tahini Sauce',
                        price: 0.5,
                        amount: null
                    },
                    'turkish_Bread': {
                        name : 'Turkish Bread',
                        price: 1,
                        amount: null
                    },
                    'feta_cheese': {
                        name : 'Feta Cheese',
                        price: 2.5,
                        amount: null
                    },
                }
            },
            {
                img: GrilledChicken,
                name: 'Grilled Chicken',
                size: {
                    'small': {
                        price : 15,
                        amount : null
                    },
                    'large': {
                        price : 21,
                        amount : null
                    },
                    'reg': null,
                    normal : null
                },
                option: null,
                extra: {
                    'hot_sauce': {
                        name : 'Hot Sauce',
                        price: 0.25,
                        amount: null
                    },
                    'white_sauce': {
                        name : 'White Sauce',
                        price: 0.25,
                        amount: null
                    },
                    'tahini_sauce': {
                        name : 'Tahini Sauce',
                        price: 0.5,
                        amount: null
                    },
                    'turkish_Bread': {
                        name : 'Turkish Bread',
                        price: 1,
                        amount: null
                    },
                    'feta_cheese': {
                        name : 'Feta Cheese',
                        price: 2.5,
                        amount: null
                    },
                }
            },
            {
                img: LambChops,
                name: 'Lamb Chops',
                size: {
                    'small': {
                        price : 15,
                        amount : null
                    },
                    'large': {
                        price : 21,
                        amount : null
                    },
                    'reg': null,
                    normal : null
                },
                option: null,
                extra: {
                    'hot_sauce': {
                        name : 'Hot Sauce',
                        price: 0.25,
                        amount: null
                    },
                    'white_sauce': {
                        name : 'White Sauce',
                        price: 0.25,
                        amount: null
                    },
                    'tahini_sauce': {
                        name : 'Tahini Sauce',
                        price: 0.5,
                        amount: null
                    },
                    'turkish_Bread': {
                        name : 'Turkish Bread',
                        price: 1,
                        amount: null
                    },
                    'feta_cheese': {
                        name : 'Feta Cheese',
                        price: 2.5,
                        amount: null
                    },
                }
            },
            {
                img: ChickenGyro,
                name: 'Chicken Gyro',
                size: {
                    'small': {
                        price : 15,
                        amount : null
                    },
                    'large': {
                        price : 21,
                        amount : null
                    },
                    'reg': null,
                    normal : null
                },
                option: null,
                extra: {
                    'hot_sauce': {
                        name : 'Hot Sauce',
                        price: 0.25,
                        amount: null
                    },
                    'white_sauce': {
                        name : 'White Sauce',
                        price: 0.25,
                        amount: null
                    },
                    'tahini_sauce': {
                        name : 'Tahini Sauce',
                        price: 0.5,
                        amount: null
                    },
                    'turkish_Bread': {
                        name : 'Turkish Bread',
                        price: 1,
                        amount: null
                    },
                    'feta_cheese': {
                        name : 'Feta Cheese',
                        price: 2.5,
                        amount: null
                    },
                }
            },
            {
                img: MixGrill,
                name: 'Mix Grill',
                size: {
                    'small': {
                        price : 15,
                        amount : null
                    },
                    'large': {
                        price : 21,
                        amount : null
                    },
                    'reg': null,
                    normal : null
                },
                option: null,
                extra: {
                    'hot_sauce': {
                        name : 'Hot Sauce',
                        price: 0.25,
                        amount: null
                    },
                    'white_sauce': {
                        name : 'White Sauce',
                        price: 0.25,
                        amount: null
                    },
                    'tahini_sauce': {
                        name : 'Tahini Sauce',
                        price: 0.5,
                        amount: null
                    },
                    'turkish_Bread': {
                        name : 'Turkish Bread',
                        price: 1,
                        amount: null
                    },
                    'feta_cheese': {
                        name : 'Feta Cheese',
                        price: 2.5,
                        amount: null
                    },
                }
            },
        ]
    },
    //Dessert
    {
        name: 'Dessert',
        items: [
            {
                img: Baklava,
                name: 'Baklava',
                size: {
                    'small': null,
                    'large': null,
                    'normal': {
                        price: 6.5,
                        amount: null
                    },
                    'reg' : null
                },
                option: null,
                extra: null
            },
            {
                img: BrownTopPudding,
                name: 'Brown Top Pudding',
                size: {
                    'small': null,
                    'large': null,
                    'normal': {
                        price: 6.5,
                        amount: null
                    },
                    'reg' : null
                },
                option: null,
                extra: null
            },
            {
                img: RicePudding,
                name: 'Rice Pudding',
                size: {
                    'small': null,
                    'large': null,
                    'normal': {
                        price: 6.5,
                        amount: null
                    },
                    'reg' : null
                },
                option: null,
                extra: null
            },
            {
                img: PistachioRolls,
                name: 'Pistachio Rolls',
                size: {
                    'small': null,
                    'large': null,
                    'normal': {
                        price: 6.5,
                        amount: null
                    },
                    'reg' : null
                },
                option: null,
                extra: null
            },
            {
                img: Kadayif,
                name: 'Kadayif',
                size: {
                    'small': null,
                    'large': null,
                    'normal': {
                        price: 6.5,
                        amount: null
                    },
                    'reg' : null
                },
                option: null,
                extra: null
            },
            {
                img: StrawberryCheesecake,
                name: 'Strawberry Cheesecake',
                size: {
                    'small': null,
                    'large': null,
                    'normal': {
                        price: 6.5,
                        amount: null
                    },
                    'reg' : null
                },
                option: null,
                extra: null
            },
            {
                img: VanillaPudding,
                name: 'Strawberry Cheesecake',
                size: {
                    'small': null,
                    'large': null,
                    'normal': {
                        price: 6.5,
                        amount: null
                    },
                    'reg' : null
                },
                option: null,
                extra: null
            },
            
        ]
    },
    //Beverages
    {
        name: 'Beverages',
        items: [
            {
                img: WaterPolandSpring,
                name: 'Water Poland Spring',
                size: {
                    'small': null,
                    'large': null,
                    'normal': {
                        price: 6.5,
                        amount: null
                    },
                    'reg' : null
                },
                option: null,
                extra: null
            },
            {
                img: TurkishJuice,
                name: 'Turkish Juice',
                size: {
                    'small': null,
                    'large': null,
                    'normal': {
                        price: 6.5,
                        amount: null
                    },
                    'reg' : null
                },
                option: {
                    'apricot': {
                        name : 'APRICOT',
                        price: 2,
                        amount: null
                    },
                    'mango': {
                        name : 'MANGO',
                        price: 2,
                        amount: null
                    },
                    'multi_fruit': {
                        name : 'MULTI FRUIT',
                        price: 2,
                        amount: null
                    },
                    'orange': {
                        name : 'ORANGE',
                        price: 2,
                        amount: null
                    },
                    'peach': {
                        name : 'PEACH',
                        price: 1,
                        amount: null
                    },
                    'sour_cheery': {
                        name : 'SOUR CHEERY',
                        price: 2,
                        amount: null
                    }
                },
                extra: null
            },
            {
                img: Sodas,
                name: 'Sodas',
                size: {
                    'small': null,
                    'large': null,
                    'normal': {
                        price: 2,
                        amount: null
                    },
                    reg : null
                },
                option: {
                    'cooke_classic': {
                        name : 'COOKE CLASSIC',
                        price: 2,
                        amount: null
                    },
                    'coke_edit': {
                        name : 'COKE EDIT',
                        price: 2,
                        amount: null
                    },
                    'fanta': {
                        name : 'FANTA',
                        price: 2,
                        amount: null
                    },
                    'pepsi': {
                        name : 'PEPSI',
                        price: 2,
                        amount: null
                    },
                    'pepsi_diet': {
                        name : 'PEPSI DIET',
                        price: 2,
                        amount: null
                    },
                    'canada_dry_ginger_ale': {
                        name : 'CANADA DRY GINGER ALE',
                        price: 2,
                        amount: null
                    },
                    'gazoz': {
                        name : 'GAZOZ',
                        price: 2,
                        amount: null
                    },
                    'sprite': {
                        name : 'SPRITE',
                        price: 2,
                        amount: null
                    },
                    'seargrams_seltzer_waster': {
                        name : 'SEAGRAMS SELTZER WASTER',
                        price: 2,
                        amount: null
                    }
                },
                extra: null
            },
            {
                img: Snapple,
                name: 'Snapple',
                size: {
                    'small': null,
                    'large': null,
                    'normal': {
                        price: 2,
                        amount: null
                    },
                    reg : null
                },
                option: {
                    'APPLE': {
                        price: 2.5,
                        amount: null
                    },
                    'PEACH': {
                        price: 2.5,
                        amount: null
                    },
                    'DIET PEACH': {
                        price: 2.5,
                        amount: null
                    },
                    'LEMON': {
                        price: 2.5,
                        amount: null
                    },
                    'DIET LEMON': {
                        price: 2.5,
                        amount: null
                    }
                },
                extra: null
            },
            {
                img: Coffee,
                name: 'Coffee',
                size: null,
                'Arabica Coffee': {
                    size: {
                        'small': null,
                        'large': null,
                        'reg': {
                            price: 2,
                            amount: null
                        }
                    }
                },
                'Colomian Coffee': {
                    size: {
                        'small': {
                            price: null,
                            amount: null
                        },
                        'large': {
                            price: null,
                            amount: null
                        },
                        'normal': {
                            price: 2,
                            amount: null
                        },
                        reg : null
                    }
                },
                'Espresso': {
                    size: {
                        'small': {
                            price: null,
                            amount: null
                        },
                        'large': {
                            price: null,
                            amount: null
                        },
                        'normal': {
                            price: 2,
                            amount: null
                        },
                        reg : null
                    }
                },
                'Latte': {
                    size: {
                        'small': null,
                        'large': null,
                        'normal': {
                            price: 2,
                            amount: null
                        },
                        reg : null
                    }
                },
                'Cappuccino': {
                    size: {
                        'small': null,
                        'large': null,
                        'normal': {
                            price: 2,
                            amount: null
                        },
                        reg : null
                    }
                },
                'Mocha': {
                    size: {
                        'small': null,
                        'large': null,
                        'normal': {
                            price: 2,
                            amount: null
                        },
                        reg : null
                    }
                },
            },
            {
                img: Tea,
                name: 'Tea',
                size: null,
                option: null,
                extra: null,
                'Turkish Tea': {
                    size: {
                        'small': null,
                        'large': null,
                        'normal': {
                            price: 2,
                            amount: null
                        },
                        reg : null
                    }
                },
                'Black Tea': {
                    size: {
                        'small': null,
                        'large': null,
                        'normal': {
                            price: 2,
                            amount: null
                        },
                        reg : null
                    }
                },
                'Mint Tea': {
                    size: {
                        'small': null,
                        'large': null,
                        'normal': {
                            price: 2,
                            amount: null
                        },
                        reg : null
                    }
                },
                'Apple Tea': {
                    size: {
                        'small': {
                            price: null,
                            amount: null
                        },
                        'large': {
                            price: null,
                            amount: null
                        },
                        'reg': {
                            price: 2,
                            amount: null
                        }
                    }
                },
                'Chamomile Tea': {
                    size: {
                        'small': {
                            price: null,
                            amount: null
                        },
                        'large': {
                            price: 2.25,
                            amount: null
                        },
                        'reg': {
                            price: 1.5,
                            amount: null
                        }
                    }
                }
            },
            {
                img: Ayran,
                name: 'Ayran',
                size: {
                    'small': null,
                    'large': {
                        price: 2.25,
                        amount: null
                    },
                    'reg': {
                        price: 1.5,
                        amount: null
                    }
                },
                option: null,
                extra: null
            },
        ]
    },
]