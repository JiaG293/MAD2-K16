const category = [
    { id: '1', title: 'Bussiness', icon: require('../assets/Button 17.png') },
    { id: '2', title: 'Design', icon: require('../assets/Button 18.png') },
    { id: '3', title: 'Code', icon: require('../assets/Button 19.png') },
    { id: '4', title: 'Writing', icon: require('../assets/Button 20.png') },
    { id: '5', title: 'Movie', icon: require('../assets/Button 21.png') },
    { id: '6', title: 'Language', icon: require('../assets/Button 22.png') },
];

const course = [
    {
        id: '11',
        titleCourse: 'Course 1',
        lecture: 'Lecturer A',
        price: 19.99,
        rating: 4.5,
        numberRating: 120,
        numberLesson: 10,
        image: require('../assets/Image 20.png'),
    }, {
        id: '22',
        titleCourse: 'Course 2',
        lecture: 'Lecturer B',
        price: 29.99,
        rating: 4.2,
        numberRating: 90,
        numberLesson: 8,
        image: require('../assets/Image 19.png'),

    }, {
        id: '33',
        titleCourse: 'Course 3',
        lecture: 'Lecturer C',
        price: 39.99,
        rating: 4.8,
        numberRating: 150,
        numberLesson: 12,
        image: require('../assets/Image 20.png'),

    }, {
        id: '44',
        titleCourse: 'Course 4',
        lecture: 'Lecturer D',
        price: 39.99,
        rating: 4.8,
        numberRating: 150,
        numberLesson: 12,
        image: require('../assets/Image 19.png'),

    },
];
const teacher = [
    {
        id: '11',
        lecture: 'Lecturer A',
        university: 'University 1',
        rating: 4.5,
        numberRating: 120,
        image: require('../assets/Image 21.png'),
    }, {
        id: '22',
        lecture: 'Lecturer B',
        university: 'University 2',
        rating: 4.2,
        numberRating: 90,
        image: require('../assets/Image 26.png'),

    }, {
        id: '33',
        lecture: 'Lecturer C',
        university: 'University 3',
        rating: 4.8,
        numberRating: 150,
        image: require('../assets/Image 25.png'),

    }, {
        id: '44',
        lecture: 'Lecturer D',
        university: 'University 4',
        rating: 4.8,
        numberRating: 150,
        image: require('../assets/Image 21.png'),

    },
]

module.exports = {
    category,
    course,
    teacher
}