import { Address } from "../core/models/address/address.model";
import { Contact } from "../core/models/contact/contact.model";

export class ContactsFakeDb {
    public static contacts = [
        {

            'id': '5725a680b3249760ea21de52',
            'avatar': 'assets/images/avatars/Abbott.jpg',
            'name': 'Marcus',
            'last_name': 'Toloto',
            'rg': '47732174',
            'cpf': '41102812889',
            'Address': {
                'id': '5725a680606588342058356d',
                'name': 'Casa',
                'zipCode': '13087503',
                'street': 'Rua Santa Maria Rosselo',
                'number': 128,
                'complement': '',
                'state': 'SP',
                'city': 'Campinas',
                'lat': '-22.848883',
                'long': '-47.055892',
            },
            'Contact': {
                'id': '5725a68009e20d0a9e9acf2a',
                'email': 'marcus91@gmail.com',
                'telphone': '1921213885',
                'celphone': '19994782250',
                'whatsapp': '19994782250',
                'facebook': 'mtoloto',
                'twitter': 'marcooola',
                'instagram': 'marcooola',
                'linkedin': 'mtoloto'
            }
        },
        {

            'id': '5725a6809fdd915739187ed5',
            'avatar': 'assets/images/avatars/Copeland.jpg',
            'name': 'Fernando',
            'last_name': 'Pillo',
            'rg': '1234567',
            'cpf': '12345678999',
            'Address': {
                'id': '5725a68007920cf75051da64',
                'name': 'Casa',
                'zipCode': '13087503',
                'street': 'Rua Santa Maria Rosselo',
                'number': 128,
                'complement': '',
                'state': 'SP',
                'city': 'Campinas',
                'lat': '-22.848883',
                'long': '-47.055892',
            },
            'Contact': {
                'id': '5725a68031fdbb1db2c1af47',
                'email': 'ferandopillo@gmail.com',
                'telphone': '1999999999',
                'celphone': '19999999992',
                'whatsapp': '19999999993',
                'facebook': 'fpillo',
                'twitter': 'fpillo',
                'instagram': 'fpillo',
                'linkedin': 'fpillo'
            }
        }/* 
        ,
        {
            'id': '5725a680bc670af746c435e2',
            'name': 'Copeland',
            'lastName': 'Redcliff',
            'avatar': 'assets/images/avatars/Copeland.jpg',
            'nickname': 'Cloudlaw',
            'company': 'Tempron',
            'jobTitle': 'Multimedia Artist',
            'email': 'copeland@withinpixels.com',
            'phone': '+1-202-555-0107',
            'address': '956 6th Avenue North Bergen, NJ 0704',
            'birthday': null,
            'notes': ''
        },
        {
            'id': '5725a680e7eb988a58ddf303',
            'name': 'Estes',
            'lastName': 'Stevens',
            'avatar': 'assets/images/avatars/Estes.jpg',
            'nickname': 'Roamer',
            'company': 'nam-dex',
            'jobTitle': 'Special Effects Artist',
            'email': 'estes@withinpixels.com',
            'phone': '+1-202-555-0113',
            'address': '664 York Street Cambridge, MA 02138',
            'birthday': null,
            'notes': ''
        },
        {
            'id': '5725a680dcb077889f758961',
            'name': 'Harper',
            'lastName': 'MacGuffin',
            'avatar': 'assets/images/avatars/Harper.jpg',
            'nickname': 'Tempest',
            'company': 'runcane',
            'jobTitle': 'Application Developer',
            'email': 'harper@withinpixels.com',
            'phone': '+1-202-555-0173',
            'address': '738 Route 11 Cornelius, NC 28031',
            'birthday': null,
            'notes': ''
        },
        {
            'id': '5725a6806acf030f9341e925',
            'name': 'Helen',
            'lastName': 'Sheridan',
            'avatar': 'assets/images/avatars/Helen.jpg',
            'nickname': 'Magicbattler',
            'company': 'Subhow',
            'jobTitle': 'Content Developer',
            'email': 'helen@withinpixels.com',
            'phone': '+1-202-555-0163',
            'address': '194 Washington Avenue Saint Petersburg, FL 33702',
            'birthday': null,
            'notes': ''
        },
        {
            'id': '5725a680ae1ae9a3c960d487',
            'name': 'Henderson',
            'lastName': 'Cambias',
            'avatar': 'assets/images/avatars/Henderson.jpg',
            'nickname': 'Blizzard',
            'company': 'Howcom',
            'jobTitle': 'Web Designer',
            'email': 'henderson@withinpixels.com',
            'phone': '+1-202-555-0151',
            'address': '686 Roosevelt Avenue Oviedo, FL 32765',
            'birthday': null,
            'notes': ''
        },
        {
            'id': '5725a680b8d240c011dd224b',
            'name': 'Josefina',
            'lastName': 'Lakefield',
            'avatar': 'assets/images/avatars/Josefina.jpg',
            'nickname': 'Violet',
            'company': 'Gecko',
            'jobTitle': 'Web Developer',
            'email': 'josefina@withinpixels.com',
            'phone': '+1-202-555-0160',
            'address': '202 Hartford Road Lynchburg, VA 24502',
            'birthday': null,
            'notes': ''
        },
        {
            'id': '5725a68034cb3968e1f79eac',
            'name': 'Katina',
            'lastName': 'Bletchley',
            'avatar': 'assets/images/avatars/Katina.jpg',
            'nickname': 'Rose',
            'company': 'Lexicom',
            'jobTitle': 'Software Designer',
            'email': 'katina@withinpixels.com',
            'phone': '+1-202-555-0186',
            'address': '219 Woodland Road Valrico, FL 33594',
            'birthday': null,
            'notes': ''
        },
        {
            'id': '5725a6801146cce777df2a08',
            'name': 'Lily',
            'lastName': 'Peasegood',
            'avatar': 'assets/images/avatars/Lily.jpg',
            'nickname': 'Star',
            'company': 'zooflex',
            'jobTitle': 'Software Specialist',
            'email': 'lily@withinpixels.com',
            'phone': '+1-202-555-0115',
            'address': '305 Willow Drive Superior, WI 54880',
            'birthday': null,
            'notes': ''
        },
        {
            'id': '5725a6808a178bfd034d6ecf',
            'name': 'Mai',
            'lastName': 'Nox',
            'avatar': 'assets/images/avatars/Mai.jpg',
            'nickname': 'Violetmage',
            'company': 'quadzone',
            'jobTitle': 'Software Engineer',
            'email': 'mai@withinpixels.com',
            'phone': '+1-202-555-0199',
            'address': '148 Heather Lane Mcminnville, TN 37110',
            'birthday': null,
            'notes': ''
        },
        {
            'id': '5725a680653c265f5c79b5a9',
            'name': 'Nancy',
            'lastName': 'Jaggers',
            'avatar': 'assets/images/avatars/Nancy.jpg',
            'nickname': 'Silverwarden',
            'company': 'Opetamnix',
            'jobTitle': 'Software Architect',
            'email': 'nancy@withinpixels.com',
            'phone': '+1-202-555-0120',
            'address': '345 Laurel Lane Union City, NJ 07087',
            'birthday': null,
            'notes': ''
        },
        {
            'id': '5725a680bbcec3cc32a8488a',
            'name': 'Nora',
            'lastName': 'Franklin',
            'avatar': 'assets/images/avatars/Nora.jpg',
            'nickname': 'Katanachanter',
            'company': 'Saoway',
            'jobTitle': 'Database Coordinator',
            'email': 'nora@withinpixels.com',
            'phone': '+1-202-555-0172',
            'address': '572 Rose Street Summerfield, FL 34491',
            'birthday': null,
            'notes': ''
        },
        {
            'id': '5725a6803d87f1b77e17b62b',
            'name': 'Odessa',
            'lastName': 'Goodman',
            'avatar': 'assets/images/avatars/Odessa.jpg',
            'nickname': 'Rose',
            'company': 'transace',
            'jobTitle': 'Database Administration Manager',
            'email': 'odessa@withinpixels.com',
            'phone': '+1-202-555-0190',
            'address': '527 Jefferson Court Conyers, GA 30012',
            'birthday': null,
            'notes': ''
        },
        {
            'id': '5725a680e87cb319bd9bd673',
            'name': 'Reyna',
            'lastName': 'Preece',
            'avatar': 'assets/images/avatars/Reyna.jpg',
            'nickname': 'Holydawn',
            'company': 'Dingex',
            'jobTitle': 'Data Processing Planner',
            'email': 'reyna@withinpixels.com',
            'phone': '+1-202-555-0116',
            'address': '297 Strawberry Lane Faribault, MN 55021',
            'birthday': null,
            'notes': ''
        },
        {
            'id': '5725a6802d10e277a0f35775',
            'name': 'Shauna',
            'lastName': 'Atherton',
            'avatar': 'assets/images/avatars/Shauna.jpg',
            'nickname': 'Faunasoul',
            'company': 'Vivaflex',
            'jobTitle': 'Art Director',
            'email': 'shauna@withinpixels.com',
            'phone': '+1-202-555-0159',
            'address': '928 Canterbury Court Pittsburgh, PA 15206',
            'birthday': null,
            'notes': ''
        },
        {
            'id': '5725a680aef1e5cf26dd3d1f',
            'name': 'Shepard',
            'lastName': 'Rosco',
            'avatar': 'assets/images/avatars/Shepard.jpg',
            'nickname': 'Fireking',
            'company': 'Goldenla',
            'jobTitle': 'Magazine Designer',
            'email': 'shepard@withinpixels.com',
            'phone': '+1-202-555-0173',
            'address': '904 Ridge Road Pickerington, OH 43147',
            'birthday': null,
            'notes': ''
        },
        {
            'id': '5725a680cd7efa56a45aea5d',
            'name': 'Tillman',
            'lastName': 'Lee',
            'avatar': 'assets/images/avatars/Tillman.jpg',
            'nickname': 'Gust',
            'company': 'K-techno',
            'jobTitle': 'News Photographer',
            'email': 'tillman@withinpixels.com',
            'phone': '+1-202-555-0183',
            'address': '447 Charles Street Dorchester, MA 02125',
            'birthday': null,
            'notes': ''
        },
        {
            'id': '5725a680fb65c91a82cb35e2',
            'name': 'Trevino',
            'lastName': 'Bush',
            'avatar': 'assets/images/avatars/Trevino.jpg',
            'nickname': 'Wolf',
            'company': 'Dalthex',
            'jobTitle': 'Photojournalist',
            'email': 'trevino@withinpixels.com',
            'phone': '+1-202-555-0138',
            'address': '84 Valley View Road Norman, OK 73072',
            'birthday': null,
            'notes': ''
        },
        {
            'id': '5725a68018c663044be49cbf',
            'name': 'Tyson',
            'lastName': 'Marshall',
            'avatar': 'assets/images/avatars/Tyson.jpg',
            'nickname': 'Honordread',
            'company': 'Geocon',
            'jobTitle': 'Manuscript Editor',
            'email': 'tyson@withinpixels.com',
            'phone': '+1-202-555-0146',
            'address': '204 Clark Street Monsey, NY 10952',
            'birthday': null,
            'notes': ''
        },
        {
            'id': '5725a6809413bf8a0a5272b1',
            'name': 'Velazquez',
            'lastName': 'Smethley',
            'avatar': 'assets/images/avatars/Velazquez.jpg',
            'nickname': 'Strifedream',
            'company': 'ranex',
            'jobTitle': 'Publications Editor',
            'email': 'velezquez@withinpixels.com',
            'phone': '+1-202-555-0146',
            'address': '261 Cleveland Street Riverside, NJ 08075',
            'birthday': null,
            'notes': ''
        } */
    ];

    public static user = [
        {
            'id': '5725a6802d10e277a0f35724',
            'name': 'John Doe',
            'avatar': 'assets/images/avatars/profile.jpg',
            'starred': [
                '5725a680ae1ae9a3c960d487',
                '5725a6801146cce777df2a08',
                '5725a680bbcec3cc32a8488a',
                '5725a680bc670af746c435e2',
                '5725a68009e20d0a9e9acf2a'
            ],
            'frequentContacts': [
                '5725a6809fdd915739187ed5',
                '5725a68031fdbb1db2c1af47',
                '5725a680606588342058356d',
                '5725a680e7eb988a58ddf303',
                '5725a6806acf030f9341e925',
                '5725a68034cb3968e1f79eac',
                '5725a6801146cce777df2a08',
                '5725a680653c265f5c79b5a9'
            ],
            'groups': [
                {
                    'id': '5725a6802d10e277a0f35739',
                    'name': 'Friends',
                    'contactIds': [
                        '5725a680bbcec3cc32a8488a',
                        '5725a680e87cb319bd9bd673',
                        '5725a6802d10e277a0f35775'
                    ]
                },
                {
                    'id': '5725a6802d10e277a0f35749',
                    'name': 'Clients',
                    'contactIds': [
                        '5725a680cd7efa56a45aea5d',
                        '5725a68018c663044be49cbf',
                        '5725a6809413bf8a0a5272b1',
                        '5725a6803d87f1b77e17b62b'
                    ]
                },
                {
                    'id': '5725a6802d10e277a0f35329',
                    'name': 'Recent Workers',
                    'contactIds': [
                        '5725a680bbcec3cc32a8488a',
                        '5725a680653c265f5c79b5a9',
                        '5725a6808a178bfd034d6ecf',
                        '5725a6801146cce777df2a08'
                    ]
                }
            ]
        }
    ];
}
