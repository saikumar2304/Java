import React from 'react';
import { useParams } from 'react-router-dom';
import HandsOnExercise from '../../../components/HandsOnExercise';

const exercises = {
  'bank-account': {
    title: "Bank Account",
    description: "Create a BankAccount class with proper encapsulation.",
    initialCode: `public class Main {
    public static void main(String[] args) {
        BankAccount account = new BankAccount("John Doe", 1000.0);
        account.deposit(500.0);
        account.withdraw(200.0);
        System.out.println(account.getBalance());
    }
}

class BankAccount {
    // Write your code here
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        BankAccount account = new BankAccount("John Doe", 1000.0);
        account.deposit(500.0);
        account.withdraw(200.0);
        System.out.println(account.getBalance());
    }
}

class BankAccount {
    private String accountHolder;
    private double balance;
    
    public BankAccount(String accountHolder, double initialBalance) {
        this.accountHolder = accountHolder;
        this.balance = initialBalance;
    }
    
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        }
    }
    
    public void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
        }
    }
    
    public double getBalance() {
        return balance;
    }
}`,
    diagram: `
+---------------------------------------+
|          BankAccount                  |
+---------------------------------------+
| - accountHolder : String              |
| - balance       : double              |
+---------------------------------------+
| + BankAccount(accountHolder: String,  |
|               initialBalance: double) |
| + deposit(amount: double) : void      |
| + withdraw(amount: double) : void     |
| + getBalance() : double               |
+---------------------------------------+
`,
    testCases: [
      {
        input: "",
        expectedOutput: "1300.0"
      }
    ]
  },
  'shape-hierarchy': {
    title: "Shape Hierarchy",
    description: "Implement inheritance with Shape classes.",
    initialCode: `public class Main {
    public static void main(String[] args) {
        Shape[] shapes = {
            new Circle(5),
            new Rectangle(4, 6)
        };
        
        for (Shape shape : shapes) {
            System.out.println(shape.getArea());
        }
    }
}

abstract class Shape {
    // Write your code here
}

class Circle extends Shape {
    // Write your code here
}

class Rectangle extends Shape {
    // Write your code here
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        Shape[] shapes = {
            new Circle(5),
            new Rectangle(4, 6)
        };
        
        for (Shape shape : shapes) {
            System.out.println(shape.getArea());
        }
    }
}

abstract class Shape {
    abstract double getArea();
}

class Circle extends Shape {
    private double radius;
    
    public Circle(double radius) {
        this.radius = radius;
    }
    
    @Override
    double getArea() {
        return Math.PI * radius * radius;
    }
}

class Rectangle extends Shape {
    private double width;
    private double height;
    
    public Rectangle(double width, double height) {
        this.width = width;
        this.height = height;
    }
    
    @Override
    double getArea() {
        return width * height;
    }
}`,
    diagram: `
+---------------------------------------+
|              Shape                    |
+---------------------------------------+
|                                       |
+---------------------------------------+
| # getArea() : double                  |
+---------------------------------------+

+---------------------------------------+
|              Circle                   |
+---------------------------------------+
| - radius : double                     |
+---------------------------------------+
| + Circle(radius: double)              |
| + getArea() : double                  |
+---------------------------------------+

+---------------------------------------+
|             Rectangle                 |
+---------------------------------------+
| - width  : double                     |
| - height : double                     |
+---------------------------------------+
| + Rectangle(width: double, height: double) |
| + getArea() : double                       |
+---------------------------------------+
`,
    testCases: [
      {
        input: "",
        expectedOutput: "78.53981633974483\n24.0"
      }
    ]
  },
  'animal-hierarchy': {
    title: "Animal Hierarchy",
    description: "Design an inheritance hierarchy for animals.",
    initialCode: `public class Main {
    public static void main(String[] args) {
        Animal dog = new Dog("Buddy");
        Animal cat = new Cat("Whiskers");

        dog.makeSound();
        cat.makeSound();
    }
}

abstract class Animal {
    // Write your code here
}

class Dog extends Animal {
    // Write your code here
}

class Cat extends Animal {
    // Write your code here
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        Animal dog = new Dog("Buddy");
        Animal cat = new Cat("Whiskers");

        dog.makeSound();
        cat.makeSound();
    }
}

abstract class Animal {
    protected String name;

    public Animal(String name) {
        this.name = name;
    }

    abstract void makeSound();
}

class Dog extends Animal {
    public Dog(String name) {
        super(name);
    }

    @Override
    void makeSound() {
        System.out.println(name + " says: Woof!");
    }
}

class Cat extends Animal {
    public Cat(String name) {
        super(name);
    }

    @Override
    void makeSound() {
        System.out.println(name + " says: Meow!");
    }
}`,
    diagram: `
+---------------------------------------+
|              Animal                   |
+---------------------------------------+
| - name : String                       |
+---------------------------------------+
| + Animal(name: String)                |
| # makeSound() : void (abstract)       |
+---------------------------------------+

+---------------------------------------+
|                Dog                    |
+---------------------------------------+
|                                       |
+---------------------------------------+
| + Dog(name: String)                   |
| + makeSound() : void                  |
+---------------------------------------+

+---------------------------------------+
|                Cat                    |
+---------------------------------------+
|                                       |
+---------------------------------------+
| + Cat(name: String)                   |
| + makeSound() : void                  |
+---------------------------------------+
`,
    testCases: [
      {
        input: "",
        expectedOutput: "Buddy says: Woof!\nWhiskers says: Meow!"
      }
    ]
  },
  'ecommerce-cart': {
    title: "E-commerce Cart",
    description: "Design a cart system with encapsulation and relationships.",
    initialCode: `public class Main {
    public static void main(String[] args) {
        Cart cart = new Cart();
        cart.addItem(new Item("Laptop", 1200.00));
        cart.addItem(new Item("Headphones", 200.00));
        System.out.println(cart.getTotal());
    }
}

class Item {
    // Write your code here
}

class Cart {
    // Write your code here
}`,
    solution: `import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        Cart cart = new Cart();
        cart.addItem(new Item("Laptop", 1200.00));
        cart.addItem(new Item("Headphones", 200.00));
        System.out.println(cart.getTotal());
    }
}

class Item {
    private String name;
    private double price;

    public Item(String name, double price) {
        this.name = name;
        this.price = price;
    }

    public double getPrice() {
        return price;
    }
}

class Cart {
    private List<Item> items;

    public Cart() {
        items = new ArrayList<>();
    }

    public void addItem(Item item) {
        items.add(item);
    }

    public double getTotal() {
        double total = 0.0;
        for (Item item : items) {
            total += item.getPrice();
        }
        return total;
    }
}`,
    diagram: `
+---------------------------------------+
|                Item                   |
+---------------------------------------+
| - name  : String                      |
| - price : double                      |
+---------------------------------------+
| + Item(name: String, price: double)   |
| + getPrice() : double                 |
+---------------------------------------+

+---------------------------------------+
|                Cart                   |
+---------------------------------------+
| - items : List<Item>                  |
+---------------------------------------+
| + Cart()                              |
| + addItem(item: Item) : void          |
| + getTotal() : double                 |
+---------------------------------------+
`,
    testCases: [
      {
        input: "",
        expectedOutput: "1400.0"
      }
    ]
  },
  'hospital-system': {
    title: "Hospital System",
    description: "Model a hospital system with classes and relationships.",
    initialCode: `public class Main {
    public static void main(String[] args) {
        Doctor doctor = new Doctor("Dr. Smith", "Cardiology");
        Patient patient = new Patient("John Doe", "Heart Surgery");

        doctor.treatPatient(patient);
    }
}

class Doctor {
    // Write your code here
}

class Patient {
    // Write your code here
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        Doctor doctor = new Doctor("Dr. Smith", "Cardiology");
        Patient patient = new Patient("John Doe", "Heart Surgery");

        doctor.treatPatient(patient);
    }
}

class Doctor {
    private String name;
    private String specialty;

    public Doctor(String name, String specialty) {
        this.name = name;
        this.specialty = specialty;
    }

    public void treatPatient(Patient patient) {
        System.out.println(name + " (" + specialty + ") is treating " + patient.getName() + " for " + patient.getIssue());
    }
}

class Patient {
    private String name;
    private String issue;

    public Patient(String name, String issue) {
        this.name = name;
        this.issue = issue;
    }

    public String getName() {
        return name;
    }

    public String getIssue() {
        return issue;
    }
}`,
    diagram: `
+---------------------------------------+
|               Doctor                  |
+---------------------------------------+
| - name      : String                  |
| - specialty : String                  |
+---------------------------------------+
| + Doctor(name: String, specialty: String) |
| + treatPatient(patient: Patient) : void  |
+---------------------------------------+

+---------------------------------------+
|               Patient                 |
+---------------------------------------+
| - name  : String                      |
| - issue : String                      |
+---------------------------------------+
| + Patient(name: String, issue: String)|
| + getName() : String                  |
| + getIssue() : String                 |
+---------------------------------------+
`,
    testCases: [
      {
        input: "",
        expectedOutput: "Dr. Smith (Cardiology) is treating John Doe for Heart Surgery"
      }
    ]
  },
  'transport-system': {
    title: "Transport System",
    description: "Model a transport system using polymorphism.",
    initialCode: `public class Main {
    public static void main(String[] args) {
        Transport bus = new Bus(50);
        Transport taxi = new Taxi(4);

        bus.travel();
        taxi.travel();
    }
}

abstract class Transport {
    // Write your code here
}

class Bus extends Transport {
    // Write your code here
}

class Taxi extends Transport {
    // Write your code here
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        Transport bus = new Bus(50);
        Transport taxi = new Taxi(4);

        bus.travel();
        taxi.travel();
    }
}

abstract class Transport {
    private int capacity;

    public Transport(int capacity) {
        this.capacity = capacity;
    }

    public int getCapacity() {
        return capacity;
    }

    abstract void travel();
}

class Bus extends Transport {
    public Bus(int capacity) {
        super(capacity);
    }

    @Override
    void travel() {
        System.out.println("The bus with capacity " + getCapacity() + " is traveling.");
    }
}

class Taxi extends Transport {
    public Taxi(int capacity) {
        super(capacity);
    }

    @Override
    void travel() {
        System.out.println("The taxi with capacity " + getCapacity() + " is traveling.");
    }
}`,
    diagram: `
+---------------------------------------+
|             Transport                 |
+---------------------------------------+
| - capacity : int                      |
+---------------------------------------+
| + Transport(capacity: int)            |
| + getCapacity() : int                 |
| # travel() : void (abstract)          |
+---------------------------------------+

+---------------------------------------+
|                Bus                    |
+---------------------------------------+
|                                       |
+---------------------------------------+
| + Bus(capacity: int)                  |
| + travel() : void                     |
+---------------------------------------+

+---------------------------------------+
|                Taxi                   |
+---------------------------------------+
|                                       |
+---------------------------------------+
| + Taxi(capacity: int)                 |
| + travel() : void                     |
+---------------------------------------+
`,
    testCases: [
      {
        input: "",
        expectedOutput: "The bus with capacity 50 is traveling.\nThe taxi with capacity 4 is traveling."
      }
    ]
  },
  'employee-management': {
    title: "Employee Management",
    description: "Model an employee management system with inheritance and encapsulation.",
    initialCode: `public class Main {
    public static void main(String[] args) {
        Employee emp1 = new FullTimeEmployee("Alice", 5000);
        Employee emp2 = new PartTimeEmployee("Bob", 20, 25);

        emp1.displaySalary();
        emp2.displaySalary();
    }
}

abstract class Employee {
    // Write your code here
}

class FullTimeEmployee extends Employee {
    // Write your code here
}

class PartTimeEmployee extends Employee {
    // Write your code here
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        Employee emp1 = new FullTimeEmployee("Alice", 5000);
        Employee emp2 = new PartTimeEmployee("Bob", 20, 25);

        emp1.displaySalary();
        emp2.displaySalary();
    }
}

abstract class Employee {
    private String name;

    public Employee(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public abstract double calculateSalary();

    public void displaySalary() {
        System.out.println(getName() + "'s salary: " + calculateSalary());
    }
}

class FullTimeEmployee extends Employee {
    private double monthlySalary;

    public FullTimeEmployee(String name, double monthlySalary) {
        super(name);
        this.monthlySalary = monthlySalary;
    }

    @Override
    public double calculateSalary() {
        return monthlySalary;
    }
}

class PartTimeEmployee extends Employee {
    private int hoursWorked;
    private double hourlyRate;

    public PartTimeEmployee(String name, int hoursWorked, double hourlyRate) {
        super(name);
        this.hoursWorked = hoursWorked;
        this.hourlyRate = hourlyRate;
    }

    @Override
    public double calculateSalary() {
        return hoursWorked * hourlyRate;
    }
}`,
    diagram: `
+---------------------------------------+
|               Employee                |
+---------------------------------------+
| - name : String                       |
+---------------------------------------+
| + Employee(name: String)              |
| + getName() : String                  |
| # calculateSalary() : double (abstract) |
| + displaySalary() : void              |
+---------------------------------------+

+---------------------------------------+
|         FullTimeEmployee              |
+---------------------------------------+
| - monthlySalary : double              |
+---------------------------------------+
| + FullTimeEmployee(name: String, monthlySalary: double) |
| + calculateSalary() : double          |
+---------------------------------------+

+---------------------------------------+
|         PartTimeEmployee              |
+---------------------------------------+
| - hoursWorked : int                   |
| - hourlyRate  : double                |
+---------------------------------------+
| + PartTimeEmployee(name: String, hoursWorked: int, hourlyRate: double) |
| + calculateSalary() : double          |
+---------------------------------------+
`,
    testCases: [
      {
        input: "",
        expectedOutput: "Alice's salary: 5000.0\nBob's salary: 500.0"
      }
    ]
  },
  'school-management': {
    title: "School Management",
    description: "Create a system to manage teachers and students.",
    initialCode: `public class Main {
    public static void main(String[] args) {
        Teacher teacher = new Teacher("Mrs. Smith", "Mathematics");
        Student student = new Student("John Doe", "Grade 10");

        teacher.teach();
        student.study();
    }
}

class Teacher {
    // Write your code here
}

class Student {
    // Write your code here
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        Teacher teacher = new Teacher("Mrs. Smith", "Mathematics");
        Student student = new Student("John Doe", "Grade 10");

        teacher.teach();
        student.study();
    }
}

class Teacher {
    private String name;
    private String subject;

    public Teacher(String name, String subject) {
        this.name = name;
        this.subject = subject;
    }

    public void teach() {
        System.out.println(name + " is teaching " + subject + ".");
    }
}

class Student {
    private String name;
    private String grade;

    public Student(String name, String grade) {
        this.name = name;
        this.grade = grade;
    }

    public void study() {
        System.out.println(name + " is studying in " + grade + ".");
    }
}`,
    diagram: `
+---------------------------------------+
|               Teacher                 |
+---------------------------------------+
| - name    : String                    |
| - subject : String                    |
+---------------------------------------+
| + Teacher(name: String, subject: String) |
| + teach() : void                      |
+---------------------------------------+

+---------------------------------------+
|               Student                 |
+---------------------------------------+
| - name  : String                      |
| - grade : String                      |
+---------------------------------------+
| + Student(name: String, grade: String) |
| + study() : void                      |
+---------------------------------------+
`,
    testCases: [
      {
        input: "",
        expectedOutput: "Mrs. Smith is teaching Mathematics.\nJohn Doe is studying in Grade 10."
      }
    ]
  },
  'library-system': {
    title: "Library System",
    description: "Create a system to manage books and borrowers.",
    initialCode: `public class Main {
    public static void main(String[] args) {
        Library library = new Library();
        library.addBook(new Book("1984", "George Orwell"));
        library.addBook(new Book("To Kill a Mockingbird", "Harper Lee"));
        
        Borrower borrower = new Borrower("Alice");
        borrower.borrowBook(library, "1984");
        borrower.returnBook(library, "1984");
    }
}

class Library {
    // Write your code here
}

class Book {
    // Write your code here
}

class Borrower {
    // Write your code here
}`,
    solution: `import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        Library library = new Library();
        library.addBook(new Book("1984", "George Orwell"));
        library.addBook(new Book("To Kill a Mockingbird", "Harper Lee"));
        
        Borrower borrower = new Borrower("Alice");
        borrower.borrowBook(library, "1984");
        borrower.returnBook(library, "1984");
    }
}

class Library {
    private List<Book> books;

    public Library() {
        books = new ArrayList<>();
    }

    public void addBook(Book book) {
        books.add(book);
    }

    public Book lendBook(String title) {
        for (Book book : books) {
            if (book.getTitle().equalsIgnoreCase(title)) {
                books.remove(book);
                return book;
            }
        }
        return null;
    }

    public void returnBook(Book book) {
        books.add(book);
    }
}

class Book {
    private String title;
    private String author;

    public Book(String title, String author) {
        this.title = title;
        this.author = author;
    }

    public String getTitle() {
        return title;
    }
}

class Borrower {
    private String name;
    private List<Book> borrowedBooks;

    public Borrower(String name) {
        this.name = name;
        borrowedBooks = new ArrayList<>();
    }

    public void borrowBook(Library library, String title) {
        Book book = library.lendBook(title);
        if (book != null) {
            borrowedBooks.add(book);
            System.out.println(name + " borrowed " + title);
        } else {
            System.out.println(title + " is not available");
        }
    }

    public void returnBook(Library library, String title) {
        for (Book book : borrowedBooks) {
            if (book.getTitle().equalsIgnoreCase(title)) {
                borrowedBooks.remove(book);
                library.returnBook(book);
                System.out.println(name + " returned " + title);
                return;
            }
        }
        System.out.println(name + " doesn't have " + title);
    }
}`,
    diagram: `
+---------------------------------------+
|               Library                 |
+---------------------------------------+
| - books : List<Book>                  |
+---------------------------------------+
| + Library()                           |
| + addBook(book: Book) : void          |
| + lendBook(title: String) : Book      |
| + returnBook(book: Book) : void       |
+---------------------------------------+

+---------------------------------------+
|                Book                   |
+---------------------------------------+
| - title  : String                     |
| - author : String                     |
+---------------------------------------+
| + Book(title: String, author: String) |
| + getTitle() : String                 |
+---------------------------------------+

+---------------------------------------+
|              Borrower                 |
+---------------------------------------+
| - name          : String              |
| - borrowedBooks : List<Book>          |
+---------------------------------------+
| + Borrower(name: String)              |
| + borrowBook(library: Library, title: String) : void |
| + returnBook(library: Library, title: String) : void |
+---------------------------------------+
`,
    testCases: [
      {
        input: "",
        expectedOutput: "Alice borrowed 1984\nAlice returned 1984"
      }
    ]
  },
  'restaurant-system': {
    title: "Restaurant System",
    description: "Model a restaurant ordering system with encapsulation and relationships.",
    initialCode: `public class Main {
    public static void main(String[] args) {
        Menu menu = new Menu();
        menu.addDish(new Dish("Pasta", 10.99));
        menu.addDish(new Dish("Pizza", 12.99));

        Order order = new Order();
        order.addDish(menu, "Pasta");
        order.addDish(menu, "Pizza");
        System.out.println(order.getTotalPrice());
    }
}

class Menu {
    // Write your code here
}

class Dish {
    // Write your code here
}

class Order {
    // Write your code here
}`,
    solution: `import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        Menu menu = new Menu();
        menu.addDish(new Dish("Pasta", 10.99));
        menu.addDish(new Dish("Pizza", 12.99));

        Order order = new Order();
        order.addDish(menu, "Pasta");
        order.addDish(menu, "Pizza");
        System.out.println(order.getTotalPrice());
    }
}

class Menu {
    private List<Dish> dishes;

    public Menu() {
        dishes = new ArrayList<>();
    }

    public void addDish(Dish dish) {
        dishes.add(dish);
    }

    public Dish getDish(String name) {
        for (Dish dish : dishes) {
            if (dish.getName().equalsIgnoreCase(name)) {
                return dish;
            }
        }
        return null;
    }
}

class Dish {
    private String name;
    private double price;

    public Dish(String name, double price) {
        this.name = name;
        this.price = price;
    }

    public String getName() {
        return name;
    }

    public double getPrice() {
        return price;
    }
}

class Order {
    private List<Dish> orderedDishes;

    public Order() {
        orderedDishes = new ArrayList<>();
    }

    public void addDish(Menu menu, String dishName) {
        Dish dish = menu.getDish(dishName);
        if (dish != null) {
            orderedDishes.add(dish);
            System.out.println(dishName + " added to the order");
        } else {
            System.out.println(dishName + " is not available");
        }
    }

    public double getTotalPrice() {
        double total = 0;
        for (Dish dish : orderedDishes) {
            total += dish.getPrice();
        }
        return total;
    }
}`,
    diagram: `
+---------------------------------------+
|                Menu                   |
+---------------------------------------+
| - dishes : List<Dish>                 |
+---------------------------------------+
| + Menu()                              |
| + addDish(dish: Dish) : void          |
| + getDish(name: String) : Dish        |
+---------------------------------------+

+---------------------------------------+
|                Dish                   |
+---------------------------------------+
| - name  : String                      |
| - price : double                      |
+---------------------------------------+
| + Dish(name: String, price: double)   |
| + getName() : String                  |
| + getPrice() : double                 |
+---------------------------------------+

+---------------------------------------+
|               Order                   |
+---------------------------------------+
| - orderedDishes : List<Dish>          |
+---------------------------------------+
| + Order()                             |
| + addDish(menu: Menu, dishName: String) : void |
| + getTotalPrice() : double            |
+---------------------------------------+
`,
    testCases: [
      {
        input: "",
        expectedOutput: "Pasta added to the order\nPizza added to the order\n23.98"
      }
    ]
  },
  'atm-machine': {
    title: "ATM Machine",
    description: "Simulate an ATM machine with encapsulation and inheritance.",
    initialCode: `public class Main {
    public static void main(String[] args) {
        ATM atm = new ATM("Central Bank ATM");
        atm.deposit(1000);
        atm.withdraw(500);
        atm.checkBalance();
    }
}

class ATM {
    // Write your code here
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        ATM atm = new ATM("Central Bank ATM");
        atm.deposit(1000);
        atm.withdraw(500);
        atm.checkBalance();
    }
}

class ATM {
    private String name;
    private double balance;

    public ATM(String name) {
        this.name = name;
        this.balance = 0;
    }

    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("Deposited: " + amount);
        } else {
            System.out.println("Invalid deposit amount.");
        }
    }

    public void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            System.out.println("Withdrawn: " + amount);
        } else {
            System.out.println("Insufficient funds or invalid amount.");
        }
    }

    public void checkBalance() {
        System.out.println("Balance: " + balance);
    }
}`,
    diagram: `
+---------------------------------------+
|                ATM                    |
+---------------------------------------+
| - name    : String                    |
| - balance : double                    |
+---------------------------------------+
| + ATM(name: String)                   |
| + deposit(amount: double) : void      |
| + withdraw(amount: double) : void     |
| + checkBalance() : void               |
+---------------------------------------+
`,
    testCases: [
      {
        input: "",
        expectedOutput: "Deposited: 1000\nWithdrawn: 500\nBalance: 500.0"
      }
    ]
  },
  'vehicle-hierarchy': {
    title: "Vehicle Hierarchy",
    description: "Create a hierarchy for different types of vehicles.",
    initialCode: `public class Main {
    public static void main(String[] args) {
        Vehicle car = new Car("Toyota", 4);
        Vehicle bike = new Bike("Harley Davidson", 2);

        car.displayDetails();
        bike.displayDetails();
    }
}

abstract class Vehicle {
    // Write your code here
}

class Car extends Vehicle {
    // Write your code here
}

class Bike extends Vehicle {
    // Write your code here
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        Vehicle car = new Car("Toyota", 4);
        Vehicle bike = new Bike("Harley Davidson", 2);

        car.displayDetails();
        bike.displayDetails();
    }
}

abstract class Vehicle {
    private String name;
    private int wheels;

    public Vehicle(String name, int wheels) {
        this.name = name;
        this.wheels = wheels;
    }

    public abstract void displayDetails();

    public String getName() {
        return name;
    }

    public int getWheels() {
        return wheels;
    }
}

class Car extends Vehicle {
    public Car(String name, int wheels) {
        super(name, wheels);
    }

    @Override
    public void displayDetails() {
        System.out.println(getName() + " is a car with " + getWheels() + " wheels.");
    }
}

class Bike extends Vehicle {
    public Bike(String name, int wheels) {
        super(name, wheels);
    }

    @Override
    public void displayDetails() {
        System.out.println(getName() + " is a bike with " + getWheels() + " wheels.");
    }
}`,
    diagram: `
+---------------------------------------+
|              Vehicle                  |
+---------------------------------------+
| - name   : String                     |
| - wheels : int                        |
+---------------------------------------+
| + Vehicle(name: String, wheels: int)  |
| + getName() : String                  |
| + getWheels() : int                   |
| # displayDetails() : void (abstract)  |
+---------------------------------------+

+---------------------------------------+
|                Car                    |
+---------------------------------------+
|                                       |
+---------------------------------------+
| + Car(name: String, wheels: int)      |
| + displayDetails() : void             |
+---------------------------------------+

+---------------------------------------+
|                Bike                   |
+---------------------------------------+
|                                       |
+---------------------------------------+
| + Bike(name: String, wheels: int)     |
| + displayDetails() : void             |
+---------------------------------------+
`,
    testCases: [
      {
        input: "",
        expectedOutput: "Toyota is a car with 4 wheels.\nHarley Davidson is a bike with 2 wheels."
      }
    ]
  },
  'bank-system': {
    title: "Bank System",
    description: "Model a bank system with multiple account types.",
    initialCode: `public class Main {
    public static void main(String[] args) {
        Account savings = new SavingsAccount("Alice", 1000);
        Account checking = new CheckingAccount("Bob", 2000);

        savings.deposit(500);
        savings.withdraw(300);
        checking.deposit(1000);
        checking.withdraw(500);
    }
}

abstract class Account {
    // Write your code here
}

class SavingsAccount extends Account {
    // Write your code here
}

class CheckingAccount extends Account {
    // Write your code here
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        Account savings = new SavingsAccount("Alice", 1000);
        Account checking = new CheckingAccount("Bob", 2000);

        savings.deposit(500);
        savings.withdraw(300);
        checking.deposit(1000);
        checking.withdraw(500);
    }
}

abstract class Account {
    private String holderName;
    private double balance;

    public Account(String holderName, double balance) {
        this.holderName = holderName;
        this.balance = balance;
    }

    public void deposit(double amount) {
        balance += amount;
        System.out.println(holderName + " deposited: " + amount);
    }

    public void withdraw(double amount) {
        if (amount <= balance) {
            balance -= amount;
            System.out.println(holderName + " withdrew: " + amount);
        } else {
            System.out.println("Insufficient balance for " + holderName);
        }
    }

    public double getBalance() {
        return balance;
    }
}

class SavingsAccount extends Account {
    public SavingsAccount(String holderName, double balance) {
        super(holderName, balance);
    }
}

class CheckingAccount extends Account {
    public CheckingAccount(String holderName, double balance) {
        super(holderName, balance);
    }
}`,
    diagram: `
+---------------------------------------+
|              Account                  |
+---------------------------------------+
| - holderName : String                 |
| - balance    : double                 |
+---------------------------------------+
| + Account(holderName: String, balance: double) |
| + deposit(amount: double) : void      |
| + withdraw(amount: double) : void     |
| + getBalance() : double               |
+---------------------------------------+

+---------------------------------------+
|           SavingsAccount              |
+---------------------------------------+
|                                       |
+---------------------------------------+
| + SavingsAccount(holderName: String, balance: double) |
+---------------------------------------+

+---------------------------------------+
|           CheckingAccount             |
+---------------------------------------+
|                                       |
+---------------------------------------+
| + CheckingAccount(holderName: String, balance: double) |
+---------------------------------------+
`,
    testCases: [
      {
        input: "",
        expectedOutput: "Alice deposited: 500\nAlice withdrew: 300\nBob deposited: 1000\nBob withdrew: 500"
      }
    ]
  },
  'employee-payroll': {
    title: "Employee Payroll",
    description: "Design a payroll system for employees using polymorphism.",
    initialCode: `public class Main {
    public static void main(String[] args) {
        Employee manager = new Manager("Alice", 7000);
        Employee developer = new Developer("Bob", 5000, 200);

        Payroll payroll = new Payroll();
        payroll.addEmployee(manager);
        payroll.addEmployee(developer);

        payroll.calculateTotalSalary();
    }
}

abstract class Employee {
    // Write your code here
}

class Manager extends Employee {
    // Write your code here
}

class Developer extends Employee {
    // Write your code here
}

class Payroll {
    // Write your code here
}`,
    solution: `import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        Employee manager = new Manager("Alice", 7000);
        Employee developer = new Developer("Bob", 5000, 200);

        Payroll payroll = new Payroll();
        payroll.addEmployee(manager);
        payroll.addEmployee(developer);

        payroll.calculateTotalSalary();
    }
}

abstract class Employee {
    private String name;

    public Employee(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public abstract double calculateSalary();
}

class Manager extends Employee {
    private double baseSalary;

    public Manager(String name, double baseSalary) {
        super(name);
        this.baseSalary = baseSalary;
    }

    @Override
    public double calculateSalary() {
        return baseSalary;
    }
}

class Developer extends Employee {
    private double baseSalary;
    private double bonus;

    public Developer(String name, double baseSalary, double bonus) {
        super(name);
        this.baseSalary = baseSalary;
        this.bonus = bonus;
    }

    @Override
    public double calculateSalary() {
        return baseSalary + bonus;
    }
}

class Payroll {
    private List<Employee> employees;

    public Payroll() {
        employees = new ArrayList<>();
    }

    public void addEmployee(Employee employee) {
        employees.add(employee);
    }

    public void calculateTotalSalary() {
        double totalSalary = 0;
        for (Employee employee : employees) {
            totalSalary += employee.calculateSalary();
            System.out.println(employee.getName() + "'s salary: " + employee.calculateSalary());
        }
        System.out.println("Total Payroll: " + totalSalary);
    }
}`,
    diagram: `
+---------------------------------------+
|               Employee                |
+---------------------------------------+
| - name : String                       |
+---------------------------------------+
| + Employee(name: String)              |
| + getName() : String                  |
| # calculateSalary() : double (abstract) |
+---------------------------------------+

+---------------------------------------+
|              Manager                  |
+---------------------------------------+
| - baseSalary : double                 |
+---------------------------------------+
| + Manager(name: String, baseSalary: double) |
| + calculateSalary() : double          |
+---------------------------------------+

+---------------------------------------+
|             Developer                 |
+---------------------------------------+
| - baseSalary : double                 |
| - bonus      : double                 |
+---------------------------------------+
| + Developer(name: String, baseSalary: double, bonus: double) |
| + calculateSalary() : double          |
+---------------------------------------+

+---------------------------------------+
|              Payroll                  |
+---------------------------------------+
| - employees : List<Employee>          |
+---------------------------------------+
| + Payroll()                           |
| + addEmployee(employee: Employee) : void |
| + calculateTotalSalary() : void       |
+---------------------------------------+
`,
    testCases: [
      {
        input: "",
        expectedOutput: "Alice's salary: 7000.0\nBob's salary: 5200.0\nTotal Payroll: 12200.0"
      }
    ]
  },
  'online-shopping': {
    title: "Online Shopping System",
    description: "Model an online shopping system with orders and items.",
    initialCode: `public class Main {
    public static void main(String[] args) {
        Item item1 = new Item("Laptop", 1000.0);
        Item item2 = new Item("Headphones", 200.0);

        Order order = new Order();
        order.addItem(item1);
        order.addItem(item2);

        System.out.println("Total order cost: " + order.calculateTotal());
    }
}

class Item {
    // Write your code here
}

class Order {
    // Write your code here
}`,
    solution: `import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        Item item1 = new Item("Laptop", 1000.0);
        Item item2 = new Item("Headphones", 200.0);

        Order order = new Order();
        order.addItem(item1);
        order.addItem(item2);

        System.out.println("Total order cost: " + order.calculateTotal());
    }
}

class Item {
    private String name;
    private double price;

    public Item(String name, double price) {
        this.name = name;
        this.price = price;
    }

    public double getPrice() {
        return price;
    }
}

class Order {
    private List<Item> items;

    public Order() {
        items = new ArrayList<>();
    }

    public void addItem(Item item) {
        items.add(item);
    }

    public double calculateTotal() {
        double total = 0;
        for (Item item : items) {
            total += item.getPrice();
        }
        return total;
    }
}`,
    diagram: `
+---------------------------------------+
|                Item                   |
+---------------------------------------+
| - name  : String                      |
| - price : double                      |
+---------------------------------------+
| + Item(name: String, price: double)   |
| + getPrice() : double                 |
+---------------------------------------+

+---------------------------------------+
|               Order                   |
+---------------------------------------+
| - items : List<Item>                  |
+---------------------------------------+
| + Order()                             |
| + addItem(item: Item) : void          |
| + calculateTotal() : double           |
+---------------------------------------+
`,
    testCases: [
      {
        input: "",
        expectedOutput: "Total order cost: 1200.0"
      }
    ]
  },
  'parking-lot-system': {
    title: "Parking Lot System",
    description: "Model a parking lot system with vehicle management.",
    initialCode: `public class Main {
    public static void main(String[] args) {
        ParkingLot parkingLot = new ParkingLot(2);
        Vehicle car = new Car("Toyota", "Sedan");
        Vehicle bike = new Bike("Yamaha", "Sports");

        parkingLot.parkVehicle(car);
        parkingLot.parkVehicle(bike);
        parkingLot.removeVehicle(car);
    }
}

abstract class Vehicle {
    // Write your code here
}

class Car extends Vehicle {
    // Write your code here
}

class Bike extends Vehicle {
    // Write your code here
}

class ParkingLot {
    // Write your code here
}`,
    solution: `import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        ParkingLot parkingLot = new ParkingLot(2);
        Vehicle car = new Car("Toyota", "Sedan");
        Vehicle bike = new Bike("Yamaha", "Sports");

        parkingLot.parkVehicle(car);
        parkingLot.parkVehicle(bike);
        parkingLot.removeVehicle(car);
    }
}

abstract class Vehicle {
    private String name;
    private String type;

    public Vehicle(String name, String type) {
        this.name = name;
        this.type = type;
    }

    public String getName() {
        return name;
    }

    public String getType() {
        return type;
    }
}

class Car extends Vehicle {
    public Car(String name, String type) {
        super(name, type);
    }
}

class Bike extends Vehicle {
    public Bike(String name, String type) {
        super(name, type);
    }
}

class ParkingLot {
    private int capacity;
    private List<Vehicle> vehicles;

    public ParkingLot(int capacity) {
        this.capacity = capacity;
        this.vehicles = new ArrayList<>();
    }

    public void parkVehicle(Vehicle vehicle) {
        if (vehicles.size() < capacity) {
            vehicles.add(vehicle);
            System.out.println(vehicle.getName() + " parked.");
        } else {
            System.out.println("Parking lot full.");
        }
    }

    public void removeVehicle(Vehicle vehicle) {
        if (vehicles.remove(vehicle)) {
            System.out.println(vehicle.getName() + " removed from parking.");
        } else {
            System.out.println(vehicle.getName() + " not found in parking.");
        }
    }
}`,
    diagram: `
+---------------------------------------+
|               Vehicle                 |
+---------------------------------------+
| - name : String                       |
| - type : String                       |
+---------------------------------------+
| + Vehicle(name: String, type: String) |
| + getName() : String                  |
| + getType() : String                  |
+---------------------------------------+

+---------------------------------------+
|                Car                    |
+---------------------------------------+
|                                       |
+---------------------------------------+
| + Car(name: String, type: String)     |
+---------------------------------------+

+---------------------------------------+
|                Bike                   |
+---------------------------------------+
|                                       |
+---------------------------------------+
| + Bike(name: String, type: String)    |
+---------------------------------------+

+---------------------------------------+
|             ParkingLot                |
+---------------------------------------+
| - capacity : int                      |
| - vehicles : List<Vehicle>            |
+---------------------------------------+
| + ParkingLot(capacity: int)           |
| + parkVehicle(vehicle: Vehicle) : void|
| + removeVehicle(vehicle: Vehicle) : void |
+---------------------------------------+
`,
    testCases: [
      {
        input: "",
        expectedOutput: "Toyota parked.\nYamaha parked.\nToyota removed from parking."
      }
    ]
  },
  'university-system': {
    title: "University System",
    description: "Design a university system with students and courses.",
    initialCode: `public class Main {
    public static void main(String[] args) {
        Course javaCourse = new Course("Java Programming");
        Student student = new Student("Alice");

        student.enroll(javaCourse);
        student.showCourses();
    }
}

class Course {
    // Write your code here
}

class Student {
    // Write your code here
}`,
    solution: `import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        Course javaCourse = new Course("Java Programming");
        Student student = new Student("Alice");

        student.enroll(javaCourse);
        student.showCourses();
    }
}

class Course {
    private String name;

    public Course(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }
}

class Student {
    private String name;
    private List<Course> courses;

    public Student(String name) {
        this.name = name;
        this.courses = new ArrayList<>();
    }

    public void enroll(Course course) {
        courses.add(course);
        System.out.println(name + " enrolled in " + course.getName());
    }

    public void showCourses() {
        System.out.println(name + "'s Courses:");
        for (Course course : courses) {
            System.out.println("- " + course.getName());
        }
    }
}`,
    diagram: `
+---------------------------------------+
|               Course                  |
+---------------------------------------+
| - name : String                       |
+---------------------------------------+
| + Course(name: String)                |
| + getName() : String                  |
+---------------------------------------+

+---------------------------------------+
|               Student                 |
+---------------------------------------+
| - name    : String                    |
| - courses : List<Course>              |
+---------------------------------------+
| + Student(name: String)               |
| + enroll(course: Course) : void       |
| + showCourses() : void                |
+---------------------------------------+
`,
    testCases: [
      {
        input: "",
        expectedOutput: "Alice enrolled in Java Programming\nAlice's Courses:\n- Java Programming"
      }
    ]
  },
  'employee-hierarchy': {
    title: "Employee Hierarchy",
    description: "Model an organization with different employee roles.",
    initialCode: `public class Main {
    public static void main(String[] args) {
        Employee manager = new Manager("Alice", 7000);
        Employee developer = new Developer("Bob", 5000, 500);
        Employee intern = new Intern("Charlie", 1000);

        manager.displayDetails();
        developer.displayDetails();
        intern.displayDetails();
    }
}

abstract class Employee {
    // Write your code here
}

class Manager extends Employee {
    // Write your code here
}

class Developer extends Employee {
    // Write your code here
}

class Intern extends Employee {
    // Write your code here
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        Employee manager = new Manager("Alice", 7000);
        Employee developer = new Developer("Bob", 5000, 500);
        Employee intern = new Intern("Charlie", 1000);

        manager.displayDetails();
        developer.displayDetails();
        intern.displayDetails();
    }
}

abstract class Employee {
    private String name;

    public Employee(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public abstract double calculateSalary();

    public void displayDetails() {
        System.out.println(getName() + "'s salary: " + calculateSalary());
    }
}

class Manager extends Employee {
    private double baseSalary;

    public Manager(String name, double baseSalary) {
        super(name);
        this.baseSalary = baseSalary;
    }

    @Override
    public double calculateSalary() {
        return baseSalary;
    }
}

class Developer extends Employee {
    private double baseSalary;
    private double bonus;

    public Developer(String name, double baseSalary, double bonus) {
        super(name);
        this.baseSalary = baseSalary;
        this.bonus = bonus;
    }

    @Override
    public double calculateSalary() {
        return baseSalary + bonus;
    }
}

class Intern extends Employee {
    private double stipend;

    public Intern(String name, double stipend) {
        super(name);
        this.stipend = stipend;
    }

    @Override
    public double calculateSalary() {
        return stipend;
    }
}`,
    diagram: `
+---------------------------------------+
|               Employee                |
+---------------------------------------+
| - name : String                       |
+---------------------------------------+
| + Employee(name: String)              |
| + getName() : String                  |
| # calculateSalary() : double (abstract) |
| + displayDetails() : void             |
+---------------------------------------+

+---------------------------------------+
|              Manager                  |
+---------------------------------------+
| - baseSalary : double                 |
+---------------------------------------+
| + Manager(name: String, baseSalary: double) |
| + calculateSalary() : double          |
+---------------------------------------+

+---------------------------------------+
|             Developer                 |
+---------------------------------------+
| - baseSalary : double                 |
| - bonus      : double                 |
+---------------------------------------+
| + Developer(name: String, baseSalary: double, bonus: double) |
| + calculateSalary() : double          |
+---------------------------------------+

+---------------------------------------+
|               Intern                  |
+---------------------------------------+
| - stipend : double                    |
+---------------------------------------+
| + Intern(name: String, stipend: double) |
| + calculateSalary() : double          |
+---------------------------------------+
`,
    testCases: [
      {
        input: "",
        expectedOutput: "Alice's salary: 7000.0\nBob's salary: 5500.0\nCharlie's salary: 1000.0"
      }
    ]
  },
  'bank-loan-system': {
    title: "Bank Loan System",
    description: "Design a system for managing bank loans with interest.",
    initialCode: `public class Main {
    public static void main(String[] args) {
        Loan personalLoan = new PersonalLoan("John Doe", 50000, 5.5);
        Loan homeLoan = new HomeLoan("Alice Smith", 200000, 3.2);

        personalLoan.displayDetails();
        homeLoan.displayDetails();
    }
}

abstract class Loan {
    // Write your code here
}

class PersonalLoan extends Loan {
    // Write your code here
}

class HomeLoan extends Loan {
    // Write your code here
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        Loan personalLoan = new PersonalLoan("John Doe", 50000, 5.5);
        Loan homeLoan = new HomeLoan("Alice Smith", 200000, 3.2);

        personalLoan.displayDetails();
        homeLoan.displayDetails();
    }
}

abstract class Loan {
    private String borrowerName;
    private double principalAmount;
    private double interestRate;

    public Loan(String borrowerName, double principalAmount, double interestRate) {
        this.borrowerName = borrowerName;
        this.principalAmount = principalAmount;
        this.interestRate = interestRate;
    }

    public double calculateTotalRepayment() {
        return principalAmount + (principalAmount * (interestRate / 100));
    }

    public void displayDetails() {
        System.out.println(borrowerName + " owes: " + calculateTotalRepayment());
    }
}

class PersonalLoan extends Loan {
    public PersonalLoan(String borrowerName, double principalAmount, double interestRate) {
        super(borrowerName, principalAmount, interestRate);
    }
}

class HomeLoan extends Loan {
    public HomeLoan(String borrowerName, double principalAmount, double interestRate) {
        super(borrowerName, principalAmount, interestRate);
    }
}`,
    diagram: `
+---------------------------------------+
|                Loan                   |
+---------------------------------------+
| - borrowerName    : String            |
| - principalAmount : double            |
| - interestRate    : double            |
+---------------------------------------+
| + Loan(borrowerName: String, principalAmount: double, interestRate: double) |
| + calculateTotalRepayment() : double  |
| + displayDetails() : void             |
+---------------------------------------+

+---------------------------------------+
|            PersonalLoan               |
+---------------------------------------+
|                                       |
+---------------------------------------+
| + PersonalLoan(borrowerName: String, principalAmount: double, interestRate: double) |
+---------------------------------------+

+---------------------------------------+
|              HomeLoan                 |
+---------------------------------------+
|                                       |
+---------------------------------------+
| + HomeLoan(borrowerName: String, principalAmount: double, interestRate: double) |
+---------------------------------------+
`,
    testCases: [
      {
        input: "",
        expectedOutput: "John Doe owes: 52750.0\nAlice Smith owes: 206400.0"
      }
    ]
  },
  'employee-management-system': {
    title: "Employee Management System",
    description: "Design an employee management system with roles and responsibilities.",
    initialCode: `public class Main {
    public static void main(String[] args) {
        Employee manager = new Manager("Alice", "HR");
        Employee engineer = new Engineer("Bob", "Development");
        
        manager.performDuties();
        engineer.performDuties();
    }
}

abstract class Employee {
    // Write your code here
}

class Manager extends Employee {
    // Write your code here
}

class Engineer extends Employee {
    // Write your code here
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        Employee manager = new Manager("Alice", "HR");
        Employee engineer = new Engineer("Bob", "Development");
        
        manager.performDuties();
        engineer.performDuties();
    }
}

abstract class Employee {
    private String name;
    private String department;

    public Employee(String name, String department) {
        this.name = name;
        this.department = department;
    }

    public abstract void performDuties();

    public String getName() {
        return name;
    }

    public String getDepartment() {
        return department;
    }
}

class Manager extends Employee {
    public Manager(String name, String department) {
        super(name, department);
    }

    @Override
    public void performDuties() {
        System.out.println(getName() + " manages the " + getDepartment() + " department.");
    }
}

class Engineer extends Employee {
    public Engineer(String name, String department) {
        super(name, department);
    }

    @Override
    public void performDuties() {
        System.out.println(getName() + " works in the " + getDepartment() + " department.");
    }
}`,
    diagram: `
+---------------------------------------+
|               Employee                |
+---------------------------------------+
| - name       : String                 |
| - department : String                 |
+---------------------------------------+
| + Employee(name: String, department: String) |
| # performDuties() : void (abstract)   |
+---------------------------------------+

+---------------------------------------+
|               Manager                 |
+---------------------------------------+
|                                       |
+---------------------------------------+
| + Manager(name: String, department: String) |
| + performDuties() : void              |
+---------------------------------------+

+---------------------------------------+
|               Engineer                |
+---------------------------------------+
|                                       |
+---------------------------------------+
| + Engineer(name: String, department: String) |
| + performDuties() : void              |
+---------------------------------------+
`,
    testCases: [
      {
        input: "",
        expectedOutput: "Alice manages the HR department.\nBob works in the Development department."
      }
    ]
  },
  'tax-calculation': {
    title: "Tax Calculation System",
    description: "Model a system to calculate tax for different categories of people.",
    initialCode: `public class Main {
    public static void main(String[] args) {
        TaxPayer individual = new Individual("John Doe", 50000);
        TaxPayer company = new Company("TechCorp", 200000);

        System.out.println(individual.calculateTax());
        System.out.println(company.calculateTax());
    }
}

abstract class TaxPayer {
    // Write your code here
}

class Individual extends TaxPayer {
    // Write your code here
}

class Company extends TaxPayer {
    // Write your code here
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        TaxPayer individual = new Individual("John Doe", 50000);
        TaxPayer company = new Company("TechCorp", 200000);

        System.out.println(individual.calculateTax());
        System.out.println(company.calculateTax());
    }
}

abstract class TaxPayer {
    private String name;
    private double income;

    public TaxPayer(String name, double income) {
        this.name = name;
        this.income = income;
    }

    public abstract double calculateTax();

    public String getName() {
        return name;
    }

    public double getIncome() {
        return income;
    }
}

class Individual extends TaxPayer {
    public Individual(String name, double income) {
        super(name, income);
    }

    @Override
    public double calculateTax() {
        return getIncome() * 0.2; // 20% tax
    }
}

class Company extends TaxPayer {
    public Company(String name, double income) {
        super(name, income);
    }

    @Override
    public double calculateTax() {
        return getIncome() * 0.3; // 30% tax
    }
}`,
    diagram: `
+---------------------------------------+
|              TaxPayer                 |
+---------------------------------------+
| - name   : String                     |
| - income : double                     |
+---------------------------------------+
| + TaxPayer(name: String, income: double) |
| # calculateTax() : double (abstract)  |
+---------------------------------------+

+---------------------------------------+
|             Individual                |
+---------------------------------------+
|                                       |
+---------------------------------------+
| + Individual(name: String, income: double) |
| + calculateTax() : double             |
+---------------------------------------+

+---------------------------------------+
|               Company                 |
+---------------------------------------+
|                                       |
+---------------------------------------+
| + Company(name: String, income: double) |
| + calculateTax() : double             |
+---------------------------------------+
`,
    testCases: [
      {
        input: "",
        expectedOutput: "10000.0\n60000.0"
      }
    ]
  },
  'bookstore-management': {
    title: "Bookstore Management",
    description: "Design a system to manage books and orders in a bookstore.",
    initialCode: `public class Main {
    public static void main(String[] args) {
        Bookstore bookstore = new Bookstore();
        bookstore.addBook(new Book("The Alchemist", "Paulo Coelho", 300));
        bookstore.addBook(new Book("Clean Code", "Robert C. Martin", 450));

        Order order = new Order();
        order.addBook(bookstore.getBook("The Alchemist"));
        order.addBook(bookstore.getBook("Clean Code"));
        System.out.println("Order total: " + order.calculateTotal());
    }
}

class Book {
    // Write your code here
}

class Bookstore {
    // Write your code here
}

class Order {
    // Write your code here
}`,
    solution: `import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        Bookstore bookstore = new Bookstore();
        bookstore.addBook(new Book("The Alchemist", "Paulo Coelho", 300));
        bookstore.addBook(new Book("Clean Code", "Robert C. Martin", 450));

        Order order = new Order();
        order.addBook(bookstore.getBook("The Alchemist"));
        order.addBook(bookstore.getBook("Clean Code"));
        System.out.println("Order total: " + order.calculateTotal());
    }
}

class Book {
    private String title;
    private String author;
    private double price;

    public Book(String title, String author, double price) {
        this.title = title;
        this.author = author;
        this.price = price;
    }

    public String getTitle() {
        return title;
    }

    public double getPrice() {
        return price;
    }
}

class Bookstore {
    private List<Book> books;

    public Bookstore() {
        books = new ArrayList<>();
    }

    public void addBook(Book book) {
        books.add(book);
    }

    public Book getBook(String title) {
        for (Book book : books) {
            if (book.getTitle().equalsIgnoreCase(title)) {
                return book;
            }
        }
        return null;
    }
}

class Order {
    private List<Book> orderedBooks;

    public Order() {
        orderedBooks = new ArrayList<>();
    }

    public void addBook(Book book) {
        if (book != null) {
            orderedBooks.add(book);
            System.out.println(book.getTitle() + " added to the order.");
        } else {
            System.out.println("Book not available.");
        }
    }

    public double calculateTotal() {
        double total = 0;
        for (Book book : orderedBooks) {
            total += book.getPrice();
        }
        return total;
    }
}`,
    diagram: `
+---------------------------------------+
|                Book                   |
+---------------------------------------+
| - title  : String                     |
| - author : String                     |
| - price  : double                     |
+---------------------------------------+
| + Book(title: String, author: String, price: double) |
| + getTitle() : String                 |
| + getPrice() : double                 |
+---------------------------------------+

+---------------------------------------+
|              Bookstore                |
+---------------------------------------+
| - books : List<Book>                  |
+---------------------------------------+
| + Bookstore()                         |
| + addBook(book: Book) : void          |
| + getBook(title: String) : Book       |
+---------------------------------------+

+---------------------------------------+
|                Order                  |
+---------------------------------------+
| - orderedBooks : List<Book>           |
+---------------------------------------+
| + Order()                             |
| + addBook(book: Book) : void          |
| + calculateTotal() : double           |
+---------------------------------------+
`,
    testCases: [
      {
        input: "",
        expectedOutput: "The Alchemist added to the order.\nClean Code added to the order.\nOrder total: 750.0"
      }
    ]
  },
  'flight-booking-system': {
    title: "Flight Booking System",
    description: "Create a system to manage flights and bookings.",
    initialCode: `public class Main {
    public static void main(String[] args) {
        Flight flight = new Flight("AI101", "New York", "London", 500);
        Passenger passenger = new Passenger("John Doe");

        Booking booking = new Booking(passenger, flight);
        booking.confirm();
    }
}

class Flight {
    // Write your code here
}

class Passenger {
    // Write your code here
}

class Booking {
    // Write your code here
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        Flight flight = new Flight("AI101", "New York", "London", 500);
        Passenger passenger = new Passenger("John Doe");

        Booking booking = new Booking(passenger, flight);
        booking.confirm();
    }
}

class Flight {
    private String flightNumber;
    private String origin;
    private String destination;
    private double price;

    public Flight(String flightNumber, String origin, String destination, double price) {
        this.flightNumber = flightNumber;
        this.origin = origin;
        this.destination = destination;
        this.price = price;
    }

    public String getFlightNumber() {
        return flightNumber;
    }

    public double getPrice() {
        return price;
    }
}

class Passenger {
    private String name;

    public Passenger(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }
}

class Booking {
    private Passenger passenger;
    private Flight flight;

    public Booking(Passenger passenger, Flight flight) {
        this.passenger = passenger;
        this.flight = flight;
    }

    public void confirm() {
        System.out.println(passenger.getName() + " booked flight " + flight.getFlightNumber() + " for $" + flight.getPrice());
    }
}`,
    diagram: `
+---------------------------------------+
|               Flight                  |
+---------------------------------------+
| - flightNumber : String               |
| - origin        : String              |
| - destination   : String              |
| - price         : double              |
+---------------------------------------+
| + Flight(flightNumber: String, origin: String, destination: String, price: double) |
| + getFlightNumber() : String          |
| + getPrice() : double                 |
+---------------------------------------+

+---------------------------------------+
|             Passenger                 |
+---------------------------------------+
| - name : String                       |
+---------------------------------------+
| + Passenger(name: String)             |
| + getName() : String                  |
+---------------------------------------+

+---------------------------------------+
|               Booking                 |
+---------------------------------------+
| - passenger : Passenger               |
| - flight    : Flight                  |
+---------------------------------------+
| + Booking(passenger: Passenger, flight: Flight) |
| + confirm() : void                    |
+---------------------------------------+
`,
    testCases: [
      {
        input: "",
        expectedOutput: "John Doe booked flight AI101 for $500.0"
      }
    ]
  },
  'university-enrollment': {
    title: "University Enrollment System",
    description: "Create a system to manage university courses and enrollments.",
    initialCode: `public class Main {
    public static void main(String[] args) {
        Course course = new Course("Data Structures", 50);
        Student student = new Student("Alice");

        Enrollment enrollment = new Enrollment(student, course);
        enrollment.enroll();
    }
}

class Course {
    // Write your code here
}

class Student {
    // Write your code here
}

class Enrollment {
    // Write your code here
}`,
    solution: `import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        Course course = new Course("Data Structures", 50);
        Student student = new Student("Alice");

        Enrollment enrollment = new Enrollment(student, course);
        enrollment.enroll();
    }
}

class Course {
    private String name;
    private int capacity;

    public Course(String name, int capacity) {
        this.name = name;
        this.capacity = capacity;
    }

    public String getName() {
        return name;
    }

    public boolean hasCapacity() {
        return capacity > 0;
    }

    public void decreaseCapacity() {
        if (capacity > 0) {
            capacity--;
        }
    }
}

class Student {
    private String name;

    public Student(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }
}

class Enrollment {
    private Student student;
    private Course course;

    public Enrollment(Student student, Course course) {
        this.student = student;
        this.course = course;
    }

    public void enroll() {
        if (course.hasCapacity()) {
            course.decreaseCapacity();
            System.out.println(student.getName() + " enrolled in " + course.getName());
        } else {
            System.out.println("No capacity left in " + course.getName());
        }
    }
}`,
    diagram: `
+---------------------------------------+
|               Course                  |
+---------------------------------------+
| - name     : String                   |
| - capacity : int                      |
+---------------------------------------+
| + Course(name: String, capacity: int) |
| + getName() : String                  |
| + hasCapacity() : boolean             |
| + decreaseCapacity() : void           |
+---------------------------------------+

+---------------------------------------+
|               Student                 |
+---------------------------------------+
| - name : String                       |
+---------------------------------------+
| + Student(name: String)               |
| + getName() : String                  |
+---------------------------------------+

+---------------------------------------+
|              Enrollment               |
+---------------------------------------+
| - student : Student                   |
| - course  : Course                    |
+---------------------------------------+
| + Enrollment(student: Student, course: Course) |
| + enroll() : void                     |
+---------------------------------------+
`,
    testCases: [
      {
        input: "",
        expectedOutput: "Alice enrolled in Data Structures"
      }
    ]
  },
  'zoo-management': {
    title: "Zoo Management System",
    description: "Model a zoo system with animals and enclosures.",
    initialCode: `public class Main {
    public static void main(String[] args) {
        Animal lion = new Animal("Lion", "Carnivore");
        Enclosure enclosure = new Enclosure("Savannah");

        Zoo zoo = new Zoo();
        zoo.addAnimalToEnclosure(lion, enclosure);
        zoo.listAnimals();
    }
}

class Animal {
    // Write your code here
}

class Enclosure {
    // Write your code here
}

class Zoo {
    // Write your code here
}`,
    solution: `import java.util.HashMap;
import java.util.Map;

public class Main {
    public static void main(String[] args) {
        Animal lion = new Animal("Lion", "Carnivore");
        Enclosure enclosure = new Enclosure("Savannah");

        Zoo zoo = new Zoo();
        zoo.addAnimalToEnclosure(lion, enclosure);
        zoo.listAnimals();
    }
}

class Animal {
    private String name;
    private String diet;

    public Animal(String name, String diet) {
        this.name = name;
        this.diet = diet;
    }

    public String getName() {
        return name;
    }

    public String getDiet() {
        return diet;
    }
}

class Enclosure {
    private String name;

    public Enclosure(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }
}

class Zoo {
    private Map<Animal, Enclosure> animalEnclosureMap;

    public Zoo() {
        animalEnclosureMap = new HashMap<>();
    }

    public void addAnimalToEnclosure(Animal animal, Enclosure enclosure) {
        animalEnclosureMap.put(animal, enclosure);
        System.out.println(animal.getName() + " added to " + enclosure.getName());
    }

    public void listAnimals() {
        for (Map.Entry<Animal, Enclosure> entry : animalEnclosureMap.entrySet()) {
            System.out.println(entry.getKey().getName() + " in " + entry.getValue().getName());
        }
    }
}`,
    diagram: `
+---------------------------------------+
|               Animal                  |
+---------------------------------------+
| - name : String                       |
| - diet : String                       |
+---------------------------------------+
| + Animal(name: String, diet: String)  |
| + getName() : String                  |
| + getDiet() : String                  |
+---------------------------------------+

+---------------------------------------+
|             Enclosure                 |
+---------------------------------------+
| - name : String                       |
+---------------------------------------+
| + Enclosure(name: String)             |
| + getName() : String                  |
+---------------------------------------+

+---------------------------------------+
|                Zoo                    |
+---------------------------------------+
| - animalEnclosureMap : Map<Animal, Enclosure> |
+---------------------------------------+
| + Zoo()                               |
| + addAnimalToEnclosure(animal: Animal, enclosure: Enclosure) : void |
| + listAnimals() : void                |
+---------------------------------------+
`,
    testCases: [
      {
        input: "",
        expectedOutput: "Lion added to Savannah\nLion in Savannah"
      }
    ]
  },
  'static-members': {
  title: "Static Members and Methods",
  description: "Demonstrate the use of static fields and methods in a class.",
  initialCode: `public class Main {
    public static void main(String[] args) {
        Student.incrementStudentCount();
        Student.incrementStudentCount();

        System.out.println("Total Students: " + Student.getStudentCount());
    }
}

class Student {
    // Write your code here
}`,
  solution: `public class Main {
    public static void main(String[] args) {
        Student.incrementStudentCount();
        Student.incrementStudentCount();

        System.out.println("Total Students: " + Student.getStudentCount());
    }
}

class Student {
    private static int studentCount = 0;

    public static void incrementStudentCount() {
        studentCount++;
    }

    public static int getStudentCount() {
        return studentCount;
    }
}`,
  diagram: `
+---------------------------------------+
|              Student                  |
+---------------------------------------+
| - studentCount : int (static)         |
+---------------------------------------+
| + incrementStudentCount() : void      |
| + getStudentCount() : int             |
+---------------------------------------+
`,
  testCases: [
    {
      input: "",
      expectedOutput: "Total Students: 2"
    }
  ]
},
'nested-classes': {
  title: "Nested and Inner Classes",
  description: "Demonstrate the use of nested classes to organize related functionality.",
  initialCode: `public class Main {
    public static void main(String[] args) {
        Outer.Inner inner = new Outer().new Inner();
        inner.display();
    }
}

class Outer {
    // Write your code here
}`,
  solution: `public class Main {
    public static void main(String[] args) {
        Outer.Inner inner = new Outer().new Inner();
        inner.display();
    }
}

class Outer {
    class Inner {
        public void display() {
            System.out.println("This is an inner class!");
        }
    }
}`,
  diagram: `
+---------------------------------------+
|               Outer                   |
+---------------------------------------+
| + Inner                               |
+---------------------------------------+
|                                       |
+---------------------------------------+

+---------------------------------------+
|               Inner                   |
+---------------------------------------+
| + display() : void                    |
+---------------------------------------+
`,
  testCases: [
    {
      input: "",
      expectedOutput: "This is an inner class!"
    }
  ]
},
'singleton-pattern': {
  title: "Singleton Pattern",
  description: "Implement a Singleton class to restrict object creation to a single instance.",
  initialCode: `public class Main {
    public static void main(String[] args) {
        Singleton instance1 = Singleton.getInstance();
        Singleton instance2 = Singleton.getInstance();

        System.out.println(instance1 == instance2); // Should print true
    }
}

class Singleton {
    // Write your code here
}`,
  solution: `public class Main {
    public static void main(String[] args) {
        Singleton instance1 = Singleton.getInstance();
        Singleton instance2 = Singleton.getInstance();

        System.out.println(instance1 == instance2); // Should print true
    }
}

class Singleton {
    private static Singleton instance;

    private Singleton() {}

    public static Singleton getInstance() {
        if (instance == null) {
            instance = new Singleton();
        }
        return instance;
    }
}`,
  diagram: `
+---------------------------------------+
|              Singleton                |
+---------------------------------------+
| - instance : Singleton                |
+---------------------------------------+
| - Singleton() (private constructor)   |
| + getInstance() : Singleton           |
+---------------------------------------+
`,
  testCases: [
    {
      input: "",
      expectedOutput: "true"
    }
  ]
},
'equals-hashcode': {
  title: "Overriding Equals and HashCode",
  description: "Correctly override equals() and hashCode() in a class.",
  initialCode: `public class Main {
    public static void main(String[] args) {
        Person p1 = new Person("Alice", 25);
        Person p2 = new Person("Alice", 25);

        System.out.println(p1.equals(p2)); // Should print true
    }
}

class Person {
    // Write your code here
}`,
  solution: `public class Main {
    public static void main(String[] args) {
        Person p1 = new Person("Alice", 25);
        Person p2 = new Person("Alice", 25);

        System.out.println(p1.equals(p2)); // Should print true
    }
}

class Person {
    private String name;
    private int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        Person person = (Person) obj;
        return age == person.age && name.equals(person.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, age);
    }
}`,
  diagram: `
+---------------------------------------+
|               Person                  |
+---------------------------------------+
| - name : String                       |
| - age  : int                          |
+---------------------------------------+
| + Person(name: String, age: int)      |
| + equals(obj: Object) : boolean       |
| + hashCode() : int                    |
+---------------------------------------+
`,
  testCases: [
    {
      input: "",
      expectedOutput: "true"
    }
  ]
},
'warehouse-inventory': {
  title: "Warehouse Inventory System",
  description: "Create a system to manage warehouse inventory with products and categories.",
  initialCode: `public class Main {
    public static void main(String[] args) {
        Warehouse warehouse = new Warehouse();
        warehouse.addCategory(new Category("Electronics"));
        warehouse.addProduct(new Product("Laptop", "Electronics", 50));
        warehouse.listInventory();
    }
}

class Warehouse {
    // Write your code here
}

class Category {
    // Write your code here
}

class Product {
    // Write your code here
}`,
  solution: `import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        Warehouse warehouse = new Warehouse();
        warehouse.addCategory(new Category("Electronics"));
        warehouse.addProduct(new Product("Laptop", "Electronics", 50));
        warehouse.listInventory();
    }
}

class Warehouse {
    private List<Category> categories;
    private List<Product> products;

    public Warehouse() {
        categories = new ArrayList<>();
        products = new ArrayList<>();
    }

    public void addCategory(Category category) {
        categories.add(category);
    }

    public void addProduct(Product product) {
        products.add(product);
    }

    public void listInventory() {
        for (Product product : products) {
            System.out.println("Product: " + product.getName() + ", Category: " + product.getCategory() + ", Stock: " + product.getStock());
        }
    }
}

class Category {
    private String name;

    public Category(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }
}

class Product {
    private String name;
    private String category;
    private int stock;

    public Product(String name, String category, int stock) {
        this.name = name;
        this.category = category;
        this.stock = stock;
    }

    public String getName() {
        return name;
    }

    public String getCategory() {
        return category;
    }

    public int getStock() {
        return stock;
    }
}`,
  diagram: `
+---------------------------------------+
|             Warehouse                 |
+---------------------------------------+
| - categories : List<Category>         |
| - products   : List<Product>          |
+---------------------------------------+
| + Warehouse()                         |
| + addCategory(category: Category) : void |
| + addProduct(product: Product) : void |
| + listInventory() : void              |
+---------------------------------------+

+---------------------------------------+
|              Category                 |
+---------------------------------------+
| - name : String                       |
+---------------------------------------+
| + Category(name: String)              |
| + getName() : String                  |
+---------------------------------------+

+---------------------------------------+
|               Product                 |
+---------------------------------------+
| - name     : String                   |
| - category : String                   |
| - stock    : int                      |
+---------------------------------------+
| + Product(name: String, category: String, stock: int) |
| + getName() : String                  |
| + getCategory() : String              |
| + getStock() : int                    |
+---------------------------------------+
`,
  testCases: [
    {
      input: "",
      expectedOutput: "Product: Laptop, Category: Electronics, Stock: 50"
    }
  ]
},
'hotel-reservation': {
  title: "Hotel Reservation System",
  description: "Design a system to manage hotel reservations.",
  initialCode: `public class Main {
    public static void main(String[] args) {
        Hotel hotel = new Hotel("Grand Palace");
        Room room = new Room("101", "Single", 100.0);
        hotel.addRoom(room);

        Guest guest = new Guest("Alice");
        Reservation reservation = new Reservation(guest, room);
        reservation.book();
    }
}

class Hotel {
    // Write your code here
}

class Room {
    // Write your code here
}

class Guest {
    // Write your code here
}

class Reservation {
    // Write your code here
}`,
  solution: `import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        Hotel hotel = new Hotel("Grand Palace");
        Room room = new Room("101", "Single", 100.0);
        hotel.addRoom(room);

        Guest guest = new Guest("Alice");
        Reservation reservation = new Reservation(guest, room);
        reservation.book();
    }
}

class Hotel {
    private String name;
    private List<Room> rooms;

    public Hotel(String name) {
        this.name = name;
        this.rooms = new ArrayList<>();
    }

    public void addRoom(Room room) {
        rooms.add(room);
    }

    public String getName() {
        return name;
    }
}

class Room {
    private String number;
    private String type;
    private double price;

    public Room(String number, String type, double price) {
        this.number = number;
        this.type = type;
        this.price = price;
    }

    public String getNumber() {
        return number;
    }

    public double getPrice() {
        return price;
    }
}

class Guest {
    private String name;

    public Guest(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }
}

class Reservation {
    private Guest guest;
    private Room room;

    public Reservation(Guest guest, Room room) {
        this.guest = guest;
        this.room = room;
    }

    public void book() {
        System.out.println(guest.getName() + " booked room " + room.getNumber() + " at $" + room.getPrice());
    }
}`,
  diagram: `
+---------------------------------------+
|               Hotel                   |
+---------------------------------------+
| - name  : String                      |
| - rooms : List<Room>                  |
+---------------------------------------+
| + Hotel(name: String)                 |
| + addRoom(room: Room) : void          |
+---------------------------------------+

+---------------------------------------+
|                Room                   |
+---------------------------------------+
| - number : String                     |
| - type   : String                     |
| - price  : double                     |
+---------------------------------------+
| + Room(number: String, type: String, price: double) |
| + getNumber() : String                |
| + getPrice() : double                 |
+---------------------------------------+

+---------------------------------------+
|               Guest                   |
+---------------------------------------+
| - name : String                       |
+---------------------------------------+
| + Guest(name: String)                 |
| + getName() : String                  |
+---------------------------------------+

+---------------------------------------+
|            Reservation                |
+---------------------------------------+
| - guest : Guest                       |
| - room  : Room                        |
+---------------------------------------+
| + Reservation(guest: Guest, room: Room) |
| + book() : void                       |
+---------------------------------------+
`,
  testCases: [
    {
      input: "",
      expectedOutput: "Alice booked room 101 at $100.0"
    }
  ]
},


};

const OOPExercise: React.FC = () => {
  const { exerciseId } = useParams();
  const exercise = exerciseId ? exercises[exerciseId as keyof typeof exercises] : null;

  if (!exercise) {
    return <div>Exercise not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-8">
      <div className="max-w-5xl mx-auto bg-gray-800 p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4">{exercise.title}</h1>
        <p className="text-gray-400 mb-6">{exercise.description}</p>

        {/* Display Diagram */}
        {exercise.diagram && (
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-yellow-400 mb-2">Class Diagram</h2>
            <pre className="bg-gray-700 p-4 rounded-md text-gray-300 overflow-x-auto">
              {exercise.diagram}
            </pre>
          </div>
        )}

        {/* Hands-On Exercise Component */}
        <HandsOnExercise
          title={exercise.title}
          description={exercise.description}
          initialCode={exercise.initialCode}
          solution={exercise.solution}
          testCases={exercise.testCases}
        />
      </div>
    </div>
  );
};

export default OOPExercise;