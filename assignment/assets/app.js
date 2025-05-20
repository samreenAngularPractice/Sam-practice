class Course {
    title;
    length;
    #price;

    constructor (title, length, price){
        this.title = title;
        this.length = length;
        this.#price = price;
    }
    get getPrice() {
        return "$"+this.price;
    }
    set setPrice(price) {
        if (price < 0) {
            console.error("Invalid price!!! Price must be non-negative.");
            return;
        }
        this.#price = price;
    }
    
    getLength()  {
        return this.length/this.#price;
    }

    getCourseSummary(){
        return "The " + this.title + " of " + this.length + " and price is : " + this.#price; 
    }
}

class PracticalCourse extends Course{
    noOfExersices;

    constructor(title, length, price, noOfExersices) {
        super();
        this.title = title;
        this.length = length;
        this.price = price;
        this.noOfExersices = noOfExersices;
    }

}

class TheoreticalCourse extends Course {

    publish() {
        console.log("Here I am publish method !!!");
    }
}

const courseObj1 = new Course("samreen", 8, 10.99);
const courseObj2 = new Course("Fatma", 9, 99.99);
console.log("courseObj1", courseObj1);
courseObj1.setPrice = 12;
console.log("courseObj1 after", courseObj1);

console.log(courseObj2);

console.log(courseObj1.getLength());
console.log(courseObj1.getCourseSummary());

const courseObj3 = new Course();

console.log("courseObj3 : ", courseObj3);
courseObj3.setPrice = 10
console.log(courseObj3.getPrice)


const practicalCourse = new PracticalCourse("pillow", 8, 10.99, 5);
console.log(practicalCourse);
console.log(practicalCourse.getCourseSummary());
console.log(practicalCourse.getLength());

const theoreticalCourse = new TheoreticalCourse();
console.log(theoreticalCourse.publish());


