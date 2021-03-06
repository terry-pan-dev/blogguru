import { Server, Response } from "miragejs"

const topics = [
    { title: 'Protest', url: 'https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F1e8f8a4b-650e-4299-876e-12b4cb63b1cb.jpg?fit=scale-down&source=next&width=700' },
    { title: 'COVID-19', url: 'https://www.hep.org.au/wp-content/uploads/2020/03/COVID-19.jpg' },
    { title: 'Biology', url: 'https://image.freepik.com/free-vector/abstract-background-with-cells-viruses-biology-medical-science-virus-cell-scientific-medical-molecule-technology-biotechnology_53562-5281.jpg' },
    { title: 'Machine learning', url: 'https://i0.wp.com/blogs.cfainstitute.org/investor/files/2018/01/Artificial-Intelligence-Machine-Learning-and-Deep-Learning-A-Primer.png?resize=940%2C575&ssl=1' },
    { title: 'Iphone', url: 'https://www.pocket-lint.com/r/s/660x/assets/images/149324-phones-review-review-iphone-11-pro-max-review-product-shots-image1-keant0hfcg-jpg.webp' },
    { title: 'Nueral network', url: 'https://www.photonicsviews.com/wp-content/uploads/2019/09/190905b_PhV-R_OpticalNetwork_OSA_540.jpg' }
]

const sources = [
    'Popular on Medium',
    'Programming',
    'Data Science',
    'Popular on Medium',
    'Science',
    'Popular on Medium',
    'Programming',
    'Popular on Medium',
    'Programming',
    'Popular on Medium',
    'Data Science',
    'Programming',
    'Popular on Medium',
    'Science',
    'Programming',
    'Programming',
    'Popular on Medium',
    'Data Science',
    'Science',
    'Programming',
    'Science',
    'Programming',
    'Data Science',
    'Data Science',
    'Science',
]

const titles = [
    'The Ultimate Toxic Relationship Test',
    'Why doesn’t Python have a main function?',
    'Understanding Variational Autoencoders (VAEs)',
    'Seven Golang Features you must know about',
    'Jared Diamond: There’s a 49 Percent Chance the World As We Know It Will End by 2050',
    '5 Micro libraries to elevate any React JS project',
    'Apache Arrow: Read DataFrame With Zero Memory',
    'Racist Expressions You Should Stop Using in Conversation',
    '5 Ways to Detect Outliers That Every Data Scientist Should Know (Python Code)',
    '4 Things Emotionally Intelligent People Don’t Do',
    'GPT-3: The New Mighty Language Model from OpenAI',
    'How I negotiated a $300,000 offer in Silicon Valley',
    '7 Quotes By The Dalai Lama That Will Change Your Mind',
    'The Ramanujan Summation: 1 + 2 + 3 + ⋯ + ∞ = -1/12?',
    '5 Obscure Python Libraries Every Data Scientist Should Know',
    'Building Beautiful Command Line Interfaces with Python',
    'This is How I Made $40k In Passive Income By Age 26',
    'Don’t waste your time on statistics',
    'How Swedes were fooled by one of the biggest scientific bluffs of our time.',
    'TDD Changed My Life',
    'After 10 Years Studying Sleep, the U.S. Military Just Revealed Something Eye-Opening About Caffeine',
    '8 Common Data Structures every Programmer must know',
    'The Poisson Distribution and Poisson Process Explained',
    'Understanding AUC - ROC Curve',
    'A Second Coronavirus Death Surge Is Coming',
]

const subtitles = [
    'For anyone wondering if it’s over.',
    'Why don’t I recommend it either',
    'Building, step by step, the reasoning that leads to VAEs.',
    'Hi there!',
    'By David Wallace-Wells',
    'A condensed list of useful micro JS libraries that are reliable, well maintained and used myself in real-world projects.',
    'Theoretical & practical introduction to Arrow file format',
    'Because it’s not just about political correctness',
    'Detecting Anomalies is critical to any business either by identifying faults or being proactive. This article discusses 5 different ways…',
    'Give up these bad habits and your natural emotional intelligence will shine',
    'Pushing Deep Learning to the Limit with 175B Parameters',
    'I had job offers to work as a software engineer at Google, Facebook, Amazon, Apple, LinkedIn, and Yelp. Here’s how I negotiated them.',
    '“Judge your success by what you had to give up in order to get it.”',
    '“What on earth are you talking about? There’s no way that’s true!” — My mom',
    'Enhance your data science project',
    'building a command line interface using python..',
    '3 hours of effort over 3 years',
    'I recently discovered that a dear friend of mine managed to earn a PhD in statistics without ever having asked himself this question…',
    'Dan Katz, licensed psychologist and psychotherapist, explains why Thomas Erikson’s success with his book Surrounded by Idiots is one of…',
    'It’s 7:15 am and customer support is swamped. We just got featured on Good Morning America, and a whole bunch of first time customers are…',
    'You might think if you’re tired, just drink coffee until you wake up. Turns out, it’s a bit more complex than that.',
    'Data Structures are a specialized means of organizing and storing data in computers in such a way that we can perform operations on the…',
    'A straightforward walk-through of a useful',
    'In Machine Learning, performance measurement is an essential task. So when it comes to a classification problem, we can count on an AUC …',
    'There was always a logical, simple explanation for why cases rose through the end of June while deaths did not',
]

const authors = [
    'Colleen Murphy in Mindful Muse',
    'Pawan Jain in Towards Data Science',
    'Joseph Rocca in Towards Data Science',
    'This is DASC',
    'New York Magazine',
    'Fay McInteer in The Startup',
    'Dejan Simic in Towards Data Science',
    'Carlyn Beccia in The Brave Writer',
    'Will Badr in Towards Data Science',
    'Nick Wignall in Personal Growth',
    'Moiz Saifee in Towards Data Science',
    'Bay Area Belletrist',
    'Sinem Günel in Mind Cafe',
    'Mark Dodds in Cantor’s Paradise',
    'Andre Ye in Towards Data Science',
    'Oyetoke Tobi Emmanuel in codeburst',
    'Amardeep Parmar in Entrepreneur\'s Handbook',
    'Cassie Kozyrkov in Towards Data Science',
    'David Sumpter',
    'Eric Elliott in JavaScript Scene',
    'Inc Magazine',
    'Vijini Mallawaarachchi in Towards Data Science',
    'Will Koehrsen in Towards Data Science',
    'Sarang Narkhede in Towards Data Science',
    'The Atlantic',
]

const dates = [
    'Jul 4',
    'Jul 19',
    'Sep 24, 2019',
    'Jul 6',
    'May 11, 2019',
    'Jun 20',
    'Jun 26',
    'Jun 18',
    'Mar 6, 2019',
    'Apr 5',
    'May 31',
    'Jan 28, 2019',
    'Jun 16',
    'Sep 3, 2018',
    'Jul 18',
    'Jun 19, 2018',
    'Jul 1',
    'May 30, 2018',
    'Jan 14',
    'Apr 19, 2019',
    'Jul 24, 2018',
    'Feb 28',
    'Jan 21, 2019',
    'Jun 27, 2018',
    'Jul 17',
]

const urls = [
    "https://cdn-images-1.medium.com/fit/c/152/156/1*kqMvzofsQVeBPYBs0RGwng.jpeg",
    "https://cdn-images-1.medium.com/fit/c/152/156/0*spxKpY40ZEYDS6tb",
    "https://cdn-images-1.medium.com/fit/c/152/156/1*mbCY2_LZX2bpGX7CH80FAg.jpeg",
    "https://cdn-images-1.medium.com/fit/c/152/156/1*Pe5_hFglqUeSz-rZb43VDw.png",
    "https://cdn-images-1.medium.com/fit/c/152/156/1*wb9o0S6GK1b2gIP3JpVQbw.jpeg",
    "https://cdn-images-1.medium.com/fit/c/152/156/0*xmgdpd8jdHZ0Rlfz",
    "https://cdn-images-1.medium.com/fit/c/152/156/0*ZRVNlpQcBmoFQhIi",
    "https://cdn-images-1.medium.com/fit/c/152/156/1*NpT7-ttLo0R6JvS5I5nm-w.jpeg",
    "https://cdn-images-1.medium.com/fit/c/152/156/0*2svyVAKJELmz6gNN",
    "https://cdn-images-1.medium.com/fit/c/152/156/1*owfuevieqUPK_dy_IXI9RQ.jpeg",
    "https://cdn-images-1.medium.com/fit/c/152/156/1*C-KNWQC_wXh-Q2wc6VPK1g.png",
    "https://cdn-images-1.medium.com/fit/c/152/156/1*TjFEp_SQMG3xh41Ly9cKig.png",
    "https://cdn-images-1.medium.com/fit/c/152/156/0*AW-zUCW-IMariSWj",
    "https://cdn-images-1.medium.com/fit/c/152/156/1*KJPfh2fIGrjyXYHbfXbUpA.jpeg",
    "https://cdn-images-1.medium.com/fit/c/152/156/0*0InvzUIXb_jwdl3I.jpg",
    "https://cdn-images-1.medium.com/fit/c/152/156/1*dKNxcjXTOGBVBGlo_DiXew.jpeg",
    "https://cdn-images-1.medium.com/fit/c/152/156/0*C5agYmRoYR0y4bbt",
    "https://cdn-images-1.medium.com/fit/c/152/156/1*GJkO3eM8h79TJaICi8y_sw.jpeg",
    "https://cdn-images-1.medium.com/fit/c/152/156/1*hIFK-gRJtJFuROOZTY4iag.jpeg",
    "https://cdn-images-1.medium.com/fit/c/152/156/1*UTiUlRqw-jUb3JpoxHo69Q.jpeg",
    "https://cdn-images-1.medium.com/focal/152/156/50/51/1*0uLo6A7FcNsnffHwkO1ing.jpeg",
    "https://cdn-images-1.medium.com/fit/c/152/156/1*KpDOKMFAgDWaGTQHL0r70g.png",
    "https://cdn-images-1.medium.com/fit/c/152/156/1*6azAYcduaPk8alIjkB53rg.jpeg",
    "https://cdn-images-1.medium.com/fit/c/152/156/1*q8VdYJGRO9RWbLi1TVeTuQ.jpeg",
    "https://cdn-images-1.medium.com/fit/c/152/156/0*egTbLGmrefjB7qlF.jpg"
]

const ids = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25
]

const bannerImages = [
    'https://image.freepik.com/free-vector/abstract-technology-network-mesh-concept-banner-background-design_1017-22590.jpg',
    'https://www.publicdomainpictures.net/pictures/170000/velka/banner-header-tapete-1463483351bhS.jpg',
    'https://www.flowerstoreinabox.com.au/images/products/large/117.jpg',
    null,
    'https://uploads.prod01.sydney.platformos.com/instances/157/assets/images/content-type-covid-19.png?updated=1587432499',
    null,
    'https://www.puttinghealthatthetop.com/wp-content/uploads/2018/05/banner.jpg',
    'https://wowslider.com/sliders/demo-40/data1/images/cherry_blossom.jpg',
    'https://www.mellanox.com/sites/default/files/homepage/img/homepage-tls-banner.jpg',
    'https://i.pinimg.com/originals/83/a9/4b/83a94bb7d6740a4e336e676518d1ccda.jpg',
    null,
    null,
    'https://media.istockphoto.com/vectors/valentines-day-banner-romantic-design-with-realistic-festive-objects-vector-id1197178173',
    'https://cdn2.f-cdn.com/contestentries/1045664/20988156/5940f7573fe72_thumb900.jpg',
    null,
    null,
    'https://nrw.reconciliation.org.au/wp-content/uploads/2020/04/NRW2020-Banner-WEB-LR.jpg',
    'https://cdn2.f-cdn.com/contestentries/1045664/20988156/5940f7573fe72_thumb900.jpg',
    'https://www.s-tech.com.au/wp-content/uploads/2016/01/S-Tech-Flood-Lights-Kwinana-Rec-Banner-1500x8191-11.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSrXSk94pmdHgWaXXtu9NHkkj-Sxje07oVh2A&usqp=CAU',
    null,
    null,
    null,
    '',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQHYkXwRN7_lIlmfBNM52j_5Mv5yVdPZQK_Yg&usqp=CAU',
    'https://images.squarespace-cdn.com/content/v1/5ee16e4e30092916dfd45118/1592266085231-J0FFVTGYRSUVUIDYKLVQ/ke17ZwdGBToddI8pDm48kDcCuKOPwKNZUkq5WKdlfb8UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dor9AuGrYK6YfUWWkPoijWVwTw3yXdY22TBfM8dyBFjpH3bqxw7fF48mhrq5Ulr0Hg/Home-Core+Content-Banner.jpg?format=2500w'
]

const contents = [
    '<h1>hello world</h1>',
    '<h1>hello world</h1>',
    '<h1>hello world</h1>',
    '<h1>hello world</h1>',
    '<h1>hello world</h1>',
    '<h1>hello world</h1>',
    '<h1>hello world</h1>',
    '<p>hello world</p>',
    '<p>hello world</p>',
    '<p>hello world</p>',
    '<p>hello world</p>',
    '<p>hello world</p>',
    '<p>hello world</p>',
    '<p>hello world</p>',
    '<p>hello world</p>',
    '<p>hello world</p>',
    '<p>hello world</p>',
    '<p>hello world</p>',
    '<p>hello world</p>',
    '<p>hello world</p>',
    '<p>hello world</p>',
    '<p>hello world</p>',
    '<p>hello world</p>',
    '<p>hello world</p>',
    '<p>hello world</p>',
]

const avatars = [
    'https://miro.medium.com/fit/c/96/96/0*lI5-avJvcBbQDmA2.jpeg',
    'https://miro.medium.com/fit/c/96/96/2*CTMyti-Mw6FQWKhBKp7rEA.jpeg',
    'https://www.w3schools.com/howto/img_avatar.png',
    'https://www.w3schools.com/howto/img_avatar.png',
    'https://www.w3schools.com/howto/img_avatar.png',
    'https://www.w3schools.com/howto/img_avatar.png',
    'https://www.w3schools.com/howto/img_avatar.png',
    'https://www.w3schools.com/howto/img_avatar.png',
    'https://www.w3schools.com/howto/img_avatar.png',
    'https://www.w3schools.com/howto/img_avatar.png',
    'https://www.w3schools.com/howto/img_avatar.png',
    'https://www.w3schools.com/howto/img_avatar.png',
    'https://www.w3schools.com/howto/img_avatar.png',
    'https://www.w3schools.com/howto/img_avatar.png',
    'https://www.w3schools.com/howto/img_avatar.png',
    'https://www.w3schools.com/howto/img_avatar.png',
    'https://www.w3schools.com/howto/img_avatar.png',
    'https://www.w3schools.com/howto/img_avatar.png',
    'https://www.w3schools.com/howto/img_avatar.png',
    'https://www.w3schools.com/howto/img_avatar.png',
    'https://www.w3schools.com/howto/img_avatar.png',
    'https://www.w3schools.com/howto/img_avatar.png',
    'https://www.w3schools.com/howto/img_avatar.png',
    'https://www.w3schools.com/howto/img_avatar.png',
    'https://www.w3schools.com/howto/img_avatar.png',
]
const articles = ids.map((_id, index) => {
    return {
        id: _id,
        source: sources[index],
        title: titles[index],
        subtitle: subtitles[index],
        author: authors[index],
        date: dates[index],
        url: urls[index],
        bannerImage: bannerImages[index],
        avatar: avatars[index],
        content: contents[index],
    }
});

const trendings = [
    "science",
    "technology",
    "politics",
    "sports",
    "movies",
    "music",
    "entertainment",
    "docker",
    "hibernetes",
    "ansible",
    "chef",
    "git",
    "puppet",
    "selenium",
    "education",
    "PHP",
    "history",
    "life",
    "stock",
    "vue",
    "react",
    "blockchain",
    "travel"
]

const recommends = [
    { topic: 'weekly trendings', url: '' },
    { topic: 'monthly trendings', url: '' },
    { topic: 'hotest series', url: '' },
    { topic: 'hotest authors', url: '' }
]

const popular_posts = [
    { id: 1, title: 'Teachers: You Are Being Gaslit', author: 'Michele Merritt, Ph.D. in Digital Diplomacy', date: 'Jul 13' },
    { id: 2, title: '7 Quotes By The Dalai Lama That Will Change Your Mind', author: 'Sinem Günel in Mind Cafe', date: 'Jun 16' },
    { id: 3, title: '“We Don’t View You as Americans. That’s the Bottom Line”', author: 'Aaron Gell in GEN', date: 'Jul 16' },
    { id: 4, title: 'Austin Was Destined to Replace Silicon Valley. Then the Pandemic Hit', author: 'Adam Bluestein in Marker', date: 'Jul 15' },
]

let users = [
    { account: 'pantaotao@icloud.com', password: '123456' }
]
export function makeServer({ environment = "test" } = {}) {
    let server = new Server({
        environment,

        routes() {
            this.namespace = "api"

            this.get("/trendings", () => {
                return trendings;
            });

            this.get('/topics', () => {
                return topics;
            });

            this.get('/articles', (db, request) => {
                const { limit, offset } = request.queryParams;
                if (offset > articles.length) {
                    return new Response(404, { errors: ['no more data'] });
                }
                return articles.slice(offset, offset + limit);
            });

            this.get('/recommendations', () => {
                return recommends;
            })

            this.get('/populars', () => {
                return popular_posts;
            })

            this.post('/users', (db, request) => {
                let payload = JSON.parse(request.requestBody);
                let { account, password } = payload;
                let user = users.filter((user) => { return user.account === account && user.password === password });
                if (user.length > 0) {
                    return {
                        status: 200
                    }
                } else {
                    return {
                        status: 403
                    }
                }
            })

        },
    })

    return server
}