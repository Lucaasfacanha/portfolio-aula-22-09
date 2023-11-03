import './style.css'

const carsMock = {
    body: {
        data: {
            cars: [
                { "car_id": 1, "car_make": "Acura", "car_model": "RL", "car_year": 2006, "car_color": "Goldenrod", "car_price": 57387, "car_condition": "refurbished", "car_mileage": 203424, "car_location": "Qarāwul", "car_description": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst." },
                { "car_id": 2, "car_make": "Acura", "car_model": "Sable", "car_year": 1996, "car_color": "Pink", "car_price": 75101, "car_condition": "used", "car_mileage": 222988, "car_location": "Coquitlam", "car_description": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam." },
                { "car_id": 3, "car_make": "Land Rover", "car_model": "Range Rover", "car_year": 1997, "car_color": "Puce", "car_price": 48381, "car_condition": "used", "car_mileage": 126981, "car_location": "Georgiyevskaya", "car_description": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus." },
                { "car_id": 4, "car_make": "Volvo", "car_model": "GL-Class", "car_year": 2011, "car_color": "Khaki", "car_price": 91578, "car_condition": "new", "car_mileage": 87273, "car_location": "Duobao", "car_description": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui." },
                { "car_id": 5, "car_make": "Ford", "car_model": "F-350 Super Duty", "car_year": 2006, "car_color": "Crimson", "car_price": 33580, "car_condition": "new", "car_mileage": 459222, "car_location": "Manga", "car_description": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus." },
                { "car_id": 6, "car_make": "Suzuki", "car_model": "Verona", "car_year": 2005, "car_color": "Purple", "car_price": 40210, "car_condition": "used", "car_mileage": 175249, "car_location": "Krasnoznamensk", "car_description": "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi." },
                { "car_id": 7, "car_make": "Ford", "car_model": "Escort", "car_year": 1988, "car_color": "Indigo", "car_price": 83077, "car_condition": "used", "car_mileage": 411448, "car_location": "Telouet", "car_description": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris." },
                { "car_id": 8, "car_make": "Acura", "car_model": "B-Series", "car_year": 1993, "car_color": "Yellow", "car_price": 45007, "car_condition": "new", "car_mileage": 128829, "car_location": "Nekla", "car_description": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus." },
                { "car_id": 9, "car_make": "Volvo", "car_model": "S80", "car_year": 1999, "car_color": "Crimson", "car_price": 81845, "car_condition": "new", "car_mileage": 135551, "car_location": "Paico", "car_description": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis." },
                { "car_id": 10, "car_make": "Volvo", "car_model": "Econoline E150", "car_year": 1993, "car_color": "Goldenrod", "car_price": 11138, "car_condition": "used", "car_mileage": 20000, "car_location": "Horad Pinsk", "car_description": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus." }]
        }
    }
}

function main() {
    const cars = carsMock.body.data.cars;
    const precoDecrescente = cars.sort((prev, next) => {
        if (next.car_price < prev.car_price) {
            return -1;
        } else {  
                return 1 
            }
    })
    
    console.log(precoDecrescente);
}

main()