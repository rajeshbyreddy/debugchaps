'use client';

import Navbar from '../../../components/Navbar';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function OOPS() {
  const content = [
    {
      question: "What is Object-Oriented Programming?",
      answer: "OOP is a programming paradigm based on the concept of objects, which can contain data and code. It emphasizes modularity, reusability, and maintainability.\n\nReal Example:\n\n• Car object: Properties (color, model, speed) and methods (start, accelerate, brake)\n• Bank Account object: Properties (balance, accountNumber) and methods (deposit, withdraw)\n• Instead of writing everything as functions and variables, you organize code around objects that represent real-world entities\n\nJava Code Example:\n```java\n// Car class representing a real-world car object\npublic class Car {\n    // Properties (data)\n    private String color;\n    private String model;\n    private int speed;\n    \n    // Methods (behavior)\n    public void start() {\n        System.out.println(\"Car started\");\n    }\n    \n    public void accelerate() {\n        speed += 10;\n        System.out.println(\"Speed: \" + speed);\n    }\n    \n    public void brake() {\n        speed = Math.max(0, speed - 5);\n        System.out.println(\"Speed: \" + speed);\n    }\n}\n\n// Usage\nCar myCar = new Car();  // Creating object\nmyCar.start();           // Calling method\nmyCar.accelerate();      // Calling method\n```"
    },
    {
      question: "What are the four pillars of OOP?",
      answer: "Encapsulation: Bundling data and methods that operate on that data\nAbstraction: Hiding complex implementation details and showing only essential features\nInheritance: Creating new classes from existing classes\nPolymorphism: Ability of objects to take many forms\n\nReal Example:\n\n• Encapsulation: Car's engine details hidden, only start/stop exposed\n• Abstraction: Coffee machine - you press button, don't need to know internal workings\n• Inheritance: Car inherits from Vehicle, gets basic vehicle properties\n• Polymorphism: Shape.draw() works differently for Circle vs Rectangle\n\nJava Code Example:\n```java\n// Encapsulation\npublic class BankAccount {\n    private double balance;  // Private data\n    \n    public void deposit(double amount) {  // Public method\n        if (amount > 0) {\n            balance += amount;\n        }\n    }\n}\n\n// Inheritance\nclass Vehicle {  // Parent class\n    protected String color;\n    public void move() {\n        System.out.println(\"Vehicle moving\");\n    }\n}\n\nclass Car extends Vehicle {  // Child class\n    private int wheels = 4;\n    public void honk() {\n        System.out.println(\"Car honking\");\n    }\n}\n\n// Polymorphism\ninterface Shape {\n    void draw();\n}\n\nclass Circle implements Shape {\n    public void draw() {\n        System.out.println(\"Drawing circle\");\n    }\n}\n\nclass Rectangle implements Shape {\n    public void draw() {\n        System.out.println(\"Drawing rectangle\");\n    }\n}\n```"
    },
    {
      question: "What is a Class?",
      answer: "A class is a blueprint or template for creating objects. It defines the properties (data) and methods (behavior) that objects of that class will have.\n\nReal Example:\n\n• Car class: Blueprint for all cars\n• Defines that every car has color, model, speed\n• Defines that every car can start, accelerate, brake\n• Individual cars (objects) are instances of this class\n• Like cookie cutter - defines shape, actual cookies are objects\n\nJava Code Example:\n```java\npublic class Car {\n    // Properties (instance variables)\n    private String color;\n    private String model;\n    private int speed;\n    \n    // Constructor\n    public Car(String color, String model) {\n        this.color = color;\n        this.model = model;\n        this.speed = 0;\n    }\n    \n    // Methods (behavior)\n    public void start() {\n        System.out.println(model + \" started\");\n    }\n    \n    public void accelerate(int increment) {\n        speed += increment;\n    }\n    \n    public String getInfo() {\n        return color + \" \" + model + \" going \" + speed + \" km/h\";\n    }\n}\n\n// Creating objects from the class\nCar car1 = new Car(\"Red\", \"Toyota\");\nCar car2 = new Car(\"Blue\", \"Honda\");\n```"
    },
    {
      question: "What is an Object?",
      answer: "An object is an instance of a class. It has state (properties) and behavior (methods). Objects are the basic building blocks of OOP.\n\nReal Example:\n\n• My red Toyota Camry is an object of Car class\n• Your savings account is an object of BankAccount class\n• Objects have identity (unique), state (current values), and behavior (what they can do)\n• Like individual cookies made from the same cutter\n\nJava Code Example:\n```java\npublic class BankAccount {\n    private String accountNumber;\n    private double balance;\n    \n    public BankAccount(String accountNumber) {\n        this.accountNumber = accountNumber;\n        this.balance = 0.0;\n    }\n    \n    public void deposit(double amount) {\n        balance += amount;\n    }\n    \n    public void withdraw(double amount) {\n        if (balance >= amount) {\n            balance -= amount;\n        }\n    }\n    \n    public double getBalance() {\n        return balance;\n    }\n}\n\n// Creating objects (instances)\nBankAccount account1 = new BankAccount(\"123456\");  // Object 1\nBankAccount account2 = new BankAccount(\"789012\");  // Object 2\n\naccount1.deposit(1000);    // State change for account1\naccount2.deposit(500);     // State change for account2\n\nSystem.out.println(account1.getBalance());  // 1000.0\nSystem.out.println(account2.getBalance());  // 500.0\n```"
    },
    {
      question: "What is Encapsulation?",
      answer: "Encapsulation is the bundling of data (properties) and methods (functions) that operate on that data into a single unit called a class. It restricts direct access to some components.\n\nReal Example:\n\n• Bank account: Balance is private, only accessible through deposit/withdraw methods\n• Car: Engine is encapsulated, you can't directly manipulate pistons\n• Prevents accidental modification of critical data\n• Like medicine capsule - active ingredients protected inside\n\nJava Code Example:\n```java\npublic class BankAccount {\n    // Private data - encapsulated\n    private double balance;\n    private String accountNumber;\n    \n    // Public constructor\n    public BankAccount(String accountNumber) {\n        this.accountNumber = accountNumber;\n        this.balance = 0.0;\n    }\n    \n    // Public methods to access private data\n    public void deposit(double amount) {\n        if (amount > 0) {\n            balance += amount;  // Controlled access\n        }\n    }\n    \n    public void withdraw(double amount) {\n        if (amount > 0 && balance >= amount) {\n            balance -= amount;  // Controlled access\n        }\n    }\n    \n    public double getBalance() {\n        return balance;  // Read-only access\n    }\n    \n    // Private method - internal implementation\n    private void logTransaction(String type, double amount) {\n        System.out.println(type + \": \" + amount);\n    }\n}\n\n// Usage\nBankAccount account = new BankAccount(\"123456\");\naccount.deposit(1000);        // OK - using public method\n// account.balance = -1000;   // ERROR - cannot access private field\ndouble balance = account.getBalance();  // OK - using getter\n```"
    },
    {
      question: "What is Abstraction?",
      answer: "Abstraction is the process of hiding complex implementation details and showing only the essential features of an object. It focuses on what an object does rather than how it does it.\n\nReal Example:\n\n• Car driver: Knows how to drive (steer, accelerate, brake) but doesn't need to know how engine works\n• ATM user: Knows how to withdraw money but doesn't need to know database queries\n• Coffee machine: Press button to get coffee, don't need to know heating elements or pumps\n• Like driving a car vs building a car engine\n\nJava Code Example:\n```java\n// Abstract class providing abstraction\npublic abstract class Vehicle {\n    protected String name;\n    \n    public Vehicle(String name) {\n        this.name = name;\n    }\n    \n    // Abstract method - what it does (no implementation)\n    public abstract void move();\n    \n    // Concrete method - common behavior\n    public void start() {\n        System.out.println(name + \" starting...\");\n        move();  // Calls abstract method\n    }\n}\n\n// Concrete implementation - how it does it\npublic class Car extends Vehicle {\n    public Car(String name) {\n        super(name);\n    }\n    \n    @Override\n    public void move() {\n        // Complex engine, transmission, wheel logic hidden\n        System.out.println(\"Car moving on 4 wheels\");\n    }\n}\n\n// Usage - user doesn't need to know implementation details\nVehicle myCar = new Car(\"Toyota\");\nmyCar.start();  // Just calls start() - abstraction in action\n```"
    },
    {
      question: "What is Inheritance?",
      answer: "Inheritance is a mechanism where a new class (child/subclass) inherits properties and methods from an existing class (parent/superclass). It promotes code reusability.\n\nReal Example:\n\n• Vehicle (parent) → Car, Truck, Motorcycle (children)\n• All vehicles have speed, color; cars add air conditioning\n• Employee (parent) → Manager, Developer, Tester (children)\n• Manager inherits salary calculation but adds bonus calculation\n• Like children inheriting traits from parents\n\nJava Code Example:\n```java\n// Parent class (superclass)\npublic class Employee {\n    protected String name;\n    protected double salary;\n    \n    public Employee(String name, double salary) {\n        this.name = name;\n        this.salary = salary;\n    }\n    \n    public double calculateSalary() {\n        return salary;\n    }\n    \n    public void displayInfo() {\n        System.out.println(\"Name: \" + name + \", Salary: \" + salary);\n    }\n}\n\n// Child class (subclass) inheriting from Employee\npublic class Manager extends Employee {\n    private double bonus;\n    \n    public Manager(String name, double salary, double bonus) {\n        super(name, salary);  // Call parent constructor\n        this.bonus = bonus;\n    }\n    \n    // Override parent method\n    @Override\n    public double calculateSalary() {\n        return super.calculateSalary() + bonus;  // Add bonus to base salary\n    }\n    \n    // New method specific to Manager\n    public void manageTeam() {\n        System.out.println(name + \" is managing team\");\n    }\n}\n\n// Usage\nEmployee emp = new Employee(\"John\", 50000);\nManager mgr = new Manager(\"Alice\", 70000, 10000);\n\nemp.displayInfo();  // Name: John, Salary: 50000.0\nmgr.displayInfo();  // Name: Alice, Salary: 70000.0\nmgr.manageTeam();   // Alice is managing team\n\nSystem.out.println(\"Manager total salary: \" + mgr.calculateSalary());  // 80000.0\n```"
    },
    {
      question: "What is Polymorphism?",
      answer: "Polymorphism allows objects of different classes to be treated as objects of a common superclass. It means \"many forms\" - same method name, different implementations.\n\nReal Example:\n\n• Shape.draw(): Circle draws circle, Rectangle draws rectangle\n• Animal.makeSound(): Dog barks, Cat meows\n• Payment.process(): CreditCard charges card, PayPal redirects to PayPal\n• Like \"drive\" - same action, different vehicles (car, bicycle, boat)\n\nJava Code Example:\n```java\n// Parent class\npublic class Animal {\n    public void makeSound() {\n        System.out.println(\"Animal makes sound\");\n    }\n}\n\n// Child classes with different implementations\npublic class Dog extends Animal {\n    @Override\n    public void makeSound() {\n        System.out.println(\"Dog barks: Woof!\");\n    }\n}\n\npublic class Cat extends Animal {\n    @Override\n    public void makeSound() {\n        System.out.println(\"Cat meows: Meow!\");\n    }\n}\n\n// Polymorphism in action\npublic class AnimalDemo {\n    public static void main(String[] args) {\n        // Same reference type, different objects\n        Animal animal1 = new Dog();    // Polymorphism\n        Animal animal2 = new Cat();    // Polymorphism\n        \n        animal1.makeSound();  // Calls Dog's makeSound()\n        animal2.makeSound();  // Calls Cat's makeSound()\n        \n        // Array of different animal types\n        Animal[] animals = {new Dog(), new Cat(), new Dog()};\n        for (Animal animal : animals) {\n            animal.makeSound();  // Different behavior for each\n        }\n    }\n}\n```"
    },
    {
      question: "What are the types of Polymorphism?",
      answer: "Compile-time Polymorphism (Static): Method overloading, decided at compile time\nRuntime Polymorphism (Dynamic): Method overriding, decided at runtime\n\nReal Example:\n\n• Method Overloading: print(String), print(int), print(double) - same name, different parameters\n• Method Overriding: Animal.speak() - Dog says \"woof\", Cat says \"meow\"\n• Static: Calculator.add(int, int) vs add(double, double)\n• Dynamic: Parent reference pointing to child object\n\nJava Code Example:\n```java\n// Compile-time Polymorphism (Method Overloading)\npublic class Calculator {\n    // Same method name, different parameters\n    public int add(int a, int b) {\n        return a + b;\n    }\n    \n    public double add(double a, double b) {\n        return a + b;\n    }\n    \n    public int add(int a, int b, int c) {\n        return a + b + c;\n    }\n}\n\n// Runtime Polymorphism (Method Overriding)\npublic class Animal {\n    public void makeSound() {\n        System.out.println(\"Animal sound\");\n    }\n}\n\npublic class Dog extends Animal {\n    @Override  // Runtime polymorphism\n    public void makeSound() {\n        System.out.println(\"Woof!\");\n    }\n}\n\npublic class PolymorphismDemo {\n    public static void main(String[] args) {\n        Calculator calc = new Calculator();\n        \n        // Compile-time polymorphism - resolved at compile time\n        System.out.println(calc.add(5, 10));        // 15\n        System.out.println(calc.add(5.5, 10.5));    // 16.0\n        System.out.println(calc.add(1, 2, 3));       // 6\n        \n        // Runtime polymorphism - resolved at runtime\n        Animal animal = new Dog();  // Parent reference, child object\n        animal.makeSound();  // Calls Dog's method (runtime decision)\n    }\n}\n```"
    },
    {
      question: "What is Method Overloading?",
      answer: "Method overloading allows multiple methods with the same name but different parameters in the same class. It's compile-time polymorphism.\n\nReal Example:\n\n• Calculator.add(int a, int b)\n• Calculator.add(double a, double b)\n• Calculator.add(int a, int b, int c)\n• Same method name, different parameter lists\n• Compiler decides which version to call based on arguments\n\nJava Code Example:\n```java\npublic class Calculator {\n    // Method overloading - same name, different parameters\n    \n    // Version 1: Two integers\n    public int add(int a, int b) {\n        System.out.println(\"Adding two integers\");\n        return a + b;\n    }\n    \n    // Version 2: Two doubles\n    public double add(double a, double b) {\n        System.out.println(\"Adding two doubles\");\n        return a + b;\n    }\n    \n    // Version 3: Three integers\n    public int add(int a, int b, int c) {\n        System.out.println(\"Adding three integers\");\n        return a + b + c;\n    }\n    \n    // Version 4: Different parameter types\n    public String add(String a, String b) {\n        System.out.println(\"Concatenating strings\");\n        return a + b;\n    }\n}\n\npublic class OverloadingDemo {\n    public static void main(String[] args) {\n        Calculator calc = new Calculator();\n        \n        // Compiler chooses appropriate method based on arguments\n        System.out.println(calc.add(5, 10));          // Calls int version\n        System.out.println(calc.add(5.5, 10.5));      // Calls double version\n        System.out.println(calc.add(1, 2, 3));        // Calls three int version\n        System.out.println(calc.add(\"Hello \", \"World\")); // Calls String version\n    }\n}\n```"
    },
    {
      question: "What is Method Overriding?",
      answer: "Method overriding occurs when a subclass provides a specific implementation of a method that is already defined in its superclass. It's runtime polymorphism.\n\nReal Example:\n\n• Animal class: makeSound() { }\n• Dog class: makeSound() { print \"Woof\" }\n• Cat class: makeSound() { print \"Meow\" }\n• When you call animal.makeSound(), actual method depends on object type at runtime\n• Requires inheritance and same method signature\n\nJava Code Example:\n```java\n// Parent class\npublic class Animal {\n    public void makeSound() {\n        System.out.println(\"Animal makes a sound\");\n    }\n    \n    public void eat() {\n        System.out.println(\"Animal eats food\");\n    }\n}\n\n// Child class overriding parent method\npublic class Dog extends Animal {\n    @Override  // Annotation indicates overriding\n    public void makeSound() {\n        System.out.println(\"Dog barks: Woof Woof!\");\n    }\n    \n    // Can also override other methods\n    @Override\n    public void eat() {\n        System.out.println(\"Dog eats dog food\");\n    }\n    \n    // New method specific to Dog\n    public void wagTail() {\n        System.out.println(\"Dog wags tail\");\n    }\n}\n\n// Another child class\npublic class Cat extends Animal {\n    @Override\n    public void makeSound() {\n        System.out.println(\"Cat meows: Meow Meow!\");\n    }\n}\n\npublic class OverridingDemo {\n    public static void main(String[] args) {\n        // Runtime polymorphism\n        Animal animal1 = new Dog();   // Parent reference, Dog object\n        Animal animal2 = new Cat();   // Parent reference, Cat object\n        Animal animal3 = new Animal(); // Parent reference, Animal object\n        \n        animal1.makeSound();  // Calls Dog's makeSound()\n        animal2.makeSound();  // Calls Cat's makeSound()\n        animal3.makeSound();  // Calls Animal's makeSound()\n        \n        // Cannot call Dog-specific method through Animal reference\n        // animal1.wagTail();  // ERROR - wagTail() not in Animal\n        \n        // Need to cast to access subclass methods\n        if (animal1 instanceof Dog) {\n            ((Dog) animal1).wagTail();  // OK - now it's Dog reference\n        }\n    }\n}\n```"
    },
    {
      question: "What is the difference between Overloading and Overriding?",
      answer: "Overloading: Same method name, different parameters, same class\nOverriding: Same method name, same parameters, different classes (inheritance)\n\nReal Example:\n\n• Overloading: Multiple constructors in same class\n• Overriding: Child class changes parent's method behavior\n• Overloading: Compile-time decision\n• Overriding: Runtime decision\n\nJava Code Example:\n```java\npublic class Calculator {\n    // Method Overloading - same class, different parameters\n    public int add(int a, int b) {\n        return a + b;\n    }\n    \n    public double add(double a, double b) {\n        return a + b;\n    }\n}\n\npublic class Animal {\n    public void makeSound() {\n        System.out.println(\"Animal sound\");\n    }\n}\n\npublic class Dog extends Animal {\n    // Method Overriding - different class, same signature\n    @Override\n    public void makeSound() {\n        System.out.println(\"Woof!\");\n    }\n}\n\npublic class OverloadVsOverrideDemo {\n    public static void main(String[] args) {\n        Calculator calc = new Calculator();\n        \n        // Overloading - compile-time polymorphism\n        System.out.println(calc.add(5, 10));      // int version\n        System.out.println(calc.add(5.5, 10.5));  // double version\n        \n        // Overriding - runtime polymorphism\n        Animal animal = new Dog();\n        animal.makeSound();  // Calls Dog's version\n    }\n}\n```"
    },
    {
      question: "What is a Constructor?",
      answer: "A constructor is a special method that is automatically called when an object is created. It initializes the object's state and allocates resources.\n\nReal Example:\n\n• Car constructor: Sets initial speed to 0, fuel to full\n• BankAccount constructor: Sets initial balance, generates account number\n• Cannot be called directly, called automatically with 'new'\n• Same name as class, no return type\n• Like birth - sets up initial state of object\n\nJava Code Example:\n```java\npublic class Car {\n    private String model;\n    private int speed;\n    private boolean engineStarted;\n    \n    // Default constructor (no parameters)\n    public Car() {\n        this.model = \"Unknown\";\n        this.speed = 0;\n        this.engineStarted = false;\n        System.out.println(\"Car created with default constructor\");\n    }\n    \n    // Parameterized constructor\n    public Car(String model) {\n        this.model = model;\n        this.speed = 0;\n        this.engineStarted = false;\n        System.out.println(\"Car created: \" + model);\n    }\n    \n    // Constructor with multiple parameters\n    public Car(String model, int initialSpeed) {\n        this.model = model;\n        this.speed = initialSpeed;\n        this.engineStarted = true;\n        System.out.println(\"Car created: \" + model + \" at speed \" + initialSpeed);\n    }\n    \n    // Constructor overloading\n    public Car(String model, String color) {\n        this.model = model;\n        this.speed = 0;\n        this.engineStarted = false;\n        System.out.println(\"Car created: \" + color + \" \" + model);\n    }\n}\n\npublic class ConstructorDemo {\n    public static void main(String[] args) {\n        Car car1 = new Car();                    // Default constructor\n        Car car2 = new Car(\"Toyota\");           // One parameter\n        Car car3 = new Car(\"Honda\", 50);        // Two parameters\n        Car car4 = new Car(\"BMW\", \"Red\");      // Different parameters\n    }\n}\n```"
    },
    {
      question: "What are the types of Constructors?",
      answer: "Default Constructor: No parameters, provided by compiler if none defined\nParameterized Constructor: Takes parameters to initialize object\nCopy Constructor: Creates object as copy of another object\n\nReal Example:\n\n• Default: new Car() - basic initialization\n• Parameterized: new Car(\"Red\", \"Toyota\") - specific values\n• Copy: new Car(existingCar) - duplicate object\n• Constructor overloading: Multiple ways to create object\n\nJava Code Example:\n```java\npublic class Student {\n    private String name;\n    private int age;\n    private String grade;\n    \n    // 1. Default Constructor\n    public Student() {\n        this.name = \"Unknown\";\n        this.age = 0;\n        this.grade = \"Not assigned\";\n    }\n    \n    // 2. Parameterized Constructor\n    public Student(String name, int age) {\n        this.name = name;\n        this.age = age;\n        this.grade = \"Not assigned\";\n    }\n    \n    // 3. Constructor with all parameters\n    public Student(String name, int age, String grade) {\n        this.name = name;\n        this.age = age;\n        this.grade = grade;\n    }\n    \n    // 4. Copy Constructor (Java doesn't have built-in copy constructor)\n    public Student(Student other) {\n        this.name = other.name;\n        this.age = other.age;\n        this.grade = other.grade;\n    }\n    \n    public void display() {\n        System.out.println(name + \" (\" + age + \" years) - Grade: \" + grade);\n    }\n}\n\npublic class ConstructorTypesDemo {\n    public static void main(String[] args) {\n        // Default constructor\n        Student s1 = new Student();\n        s1.display();  // Unknown (0 years) - Grade: Not assigned\n        \n        // Parameterized constructor\n        Student s2 = new Student(\"Alice\", 20);\n        s2.display();  // Alice (20 years) - Grade: Not assigned\n        \n        // Full constructor\n        Student s3 = new Student(\"Bob\", 22, \"A\");\n        s3.display();  // Bob (22 years) - Grade: A\n        \n        // Copy constructor\n        Student s4 = new Student(s3);\n        s4.display();  // Bob (22 years) - Grade: A\n    }\n}\n```"
    },
    {
      question: "What is a Destructor?",
      answer: "A destructor is a special method that is automatically called when an object is destroyed. It cleans up resources and performs cleanup operations.\n\nReal Example:\n\n• File handle: Closes open files when object destroyed\n• Database connection: Closes connection when object destroyed\n• Memory: Frees allocated memory\n• Like cleanup crew after party - ensures everything is properly cleaned up\n• In Java/C#, garbage collector handles most cleanup automatically"
    },
    {
      question: "What is the 'this' keyword?",
      answer: "The 'this' keyword refers to the current instance of the class. It is used to access instance variables and methods from within the class.\n\nReal Example:\n\n• this.name = name; (assigning parameter to instance variable)\n• this.display(); (calling method on current object)\n• return this; (method chaining)\n• Constructor chaining: this() calls another constructor\n• Like \"I\" or \"me\" - refers to current object\n\nJava Code Example:\n```java\npublic class Person {\n    private String name;\n    private int age;\n    \n    // Constructor using 'this' to assign parameters\n    public Person(String name, int age) {\n        this.name = name;  // this.name refers to instance variable\n        this.age = age;    // this.age refers to instance variable\n    }\n    \n    // Method using 'this' to call another method\n    public void introduce() {\n        System.out.println(\"Hi, I'm \" + this.name);\n        this.displayAge();  // Calls another method on same object\n    }\n    \n    // Method using 'this' for clarity\n    public void displayAge() {\n        System.out.println(this.name + \" is \" + this.age + \" years old\");\n    }\n    \n    // Method returning 'this' for method chaining\n    public Person setName(String name) {\n        this.name = name;\n        return this;  // Return current object\n    }\n    \n    public Person setAge(int age) {\n        this.age = age;\n        return this;  // Return current object\n    }\n}\n\npublic class ThisKeywordDemo {\n    public static void main(String[] args) {\n        Person person = new Person(\"Alice\", 25);\n        person.introduce();\n        \n        // Method chaining using 'this'\n        person.setName(\"Bob\").setAge(30).introduce();\n    }\n}\n```"
    },
    {
      question: "What is the 'super' keyword?",
      answer: "The 'super' keyword refers to the parent class. It is used to access parent class methods, constructors, and variables from the child class.\n\nReal Example:\n\n• super.display(); (call parent method)\n• super(name, age); (call parent constructor)\n• super.speed (access parent variable)\n• Constructor must call super() first if no this()\n• Like referring to parent - \"my parent's house\""
    },
    {
      question: "What is the difference between 'this' and 'super'?",
      answer: "'this' refers to current object, 'super' refers to parent class\n\nReal Example:\n\n• this: Current instance variables/methods\n• super: Parent class variables/methods\n• Constructor: this() calls same class constructor, super() calls parent constructor\n• Method: this.method() calls current class method, super.method() calls parent method"
    },
    {
      question: "What is an Abstract Class?",
      answer: "An abstract class is a class that cannot be instantiated and is designed to be subclassed. It can contain abstract methods (without implementation) and concrete methods.\n\nReal Example:\n\n• Shape abstract class: draw() is abstract, getArea() might be concrete\n• Cannot create Shape object directly\n• Circle extends Shape, implements draw()\n• Like blueprint for house - you build actual houses from it, not live in blueprint"
    },
    {
      question: "What is an Interface?",
      answer: "An interface is a contract that specifies methods that a class must implement. It defines a set of method signatures without implementation. Classes can implement multiple interfaces.\n\nReal Example:\n\n• Flyable interface: fly() method\n• Bird implements Flyable, Airplane implements Flyable\n• Different implementations of fly()\n• Like electrical plug standard - devices must match the interface\n• Multiple inheritance workaround"
    },
    {
      question: "What is the difference between Abstract Class and Interface?",
      answer: "Abstract Class: Can have concrete methods, single inheritance, constructor\nInterface: Only method signatures, multiple inheritance, no constructor\n\nReal Example:\n\n• Abstract Class: Vehicle with some common behavior\n• Interface: Drivable, Flyable - a class can be both\n• Abstract Class: IS-A relationship (Car IS-A Vehicle)\n• Interface: CAN-DO relationship (Bird CAN fly)"
    },
    {
      question: "What is Multiple Inheritance?",
      answer: "Multiple inheritance allows a class to inherit from multiple parent classes. However, most languages like Java don't support it directly due to diamond problem.\n\nReal Example:\n\n• C++ supports multiple inheritance\n• Class D inherits from both B and C, which inherit from A\n• Diamond problem: Which version of A's method does D use?\n• Java uses interfaces to achieve similar effect\n• Like child inheriting from both mother and father"
    },
    {
      question: "What is the Diamond Problem?",
      answer: "The diamond problem occurs in multiple inheritance when a class inherits from two classes that have a common ancestor, causing ambiguity about which method to use.\n\nReal Example:\n\n• Class D inherits from B and C\n• Both B and C inherit from A\n• D has two paths to A's method\n• Which implementation should D use?\n• Solved by virtual inheritance in C++, interfaces in Java"
    },
    {
      question: "What is Composition?",
      answer: "Composition is a design principle where a class contains objects of other classes as member variables. It represents \"has-a\" relationship.\n\nReal Example:\n\n• Car has-an Engine\n• University has-a Department\n• Computer has-a CPU, RAM, HardDrive\n• Stronger relationship than aggregation\n• When car is destroyed, engine is also destroyed\n• Like parts making up a whole"
    },
    {
      question: "What is Aggregation?",
      answer: "Aggregation is a weak form of composition where the contained object can exist independently of the container. It represents \"has-a\" relationship but with weaker coupling.\n\nReal Example:\n\n• Department has-a Professor (aggregation)\n• Professor can exist without department\n• Library has-a Book (aggregation)\n• Book can exist without library\n• Like team members - they exist independently but are part of team"
    },
    {
      question: "What is Association?",
      answer: "Association represents a relationship between two classes. It can be one-to-one, one-to-many, or many-to-many. It's the most general relationship.\n\nReal Example:\n\n• Teacher teaches Student (one-to-many)\n• Doctor treats Patient (one-to-many)\n• Student enrolls in Course (many-to-many)\n• Can be unidirectional or bidirectional\n• Like relationships between entities in real world"
    },
    {
      question: "What is Coupling?",
      answer: "Coupling refers to the degree of interdependence between classes. Low coupling is desirable as it makes code more maintainable and testable.\n\nReal Example:\n\n• Tight coupling: Class A directly creates and uses Class B\n• Loose coupling: Class A uses interface, actual implementation injected\n• High coupling: Changes in one class break others\n• Low coupling: Classes can be changed independently\n• Like tightly vs loosely connected machine parts"
    },
    {
      question: "What is Cohesion?",
      answer: "Cohesion refers to how closely related the responsibilities of a class are. High cohesion means a class has a single, well-defined purpose.\n\nReal Example:\n\n• High cohesion: Car class handles only car-related functions\n• Low cohesion: Utility class with unrelated methods (file I/O, math, networking)\n• High cohesion: Easier to understand, maintain, test\n• Low cohesion: Hard to modify without affecting other parts\n• Like focused specialist vs jack-of-all-trades"
    },
    {
      question: "What is SOLID Principles?",
      answer: "SOLID is acronym for five design principles:\n\n• Single Responsibility: Class should have one reason to change\n• Open-Closed: Open for extension, closed for modification\n• Liskov Substitution: Subtypes should be substitutable for base types\n• Interface Segregation: Clients shouldn't depend on unused interfaces\n• Dependency Inversion: Depend on abstractions, not concretions\n\nReal Example:\n\n• Single Responsibility: User class handles only user data, not email sending\n• Open-Closed: Add new payment methods without changing existing code\n• Liskov: Square should be substitutable for Rectangle\n• Interface Segregation: Separate interfaces for different client needs\n• Dependency Inversion: Use PaymentProcessor interface, not specific implementations"
    },
    {
      question: "What is Design Patterns?",
      answer: "Design patterns are proven solutions to common software design problems. They provide templates for solving recurring design issues.\n\nReal Example:\n\n• Singleton: Ensure only one instance of class exists (Database connection)\n• Factory: Create objects without specifying exact class (Vehicle factory)\n• Observer: Notify multiple objects when state changes (News subscription)\n• Strategy: Select algorithm at runtime (Sorting strategies)\n• Like architectural patterns - proven solutions for common building problems"
    },
    {
      question: "What is Singleton Pattern?",
      answer: "Singleton pattern ensures that only one instance of a class exists and provides global access to that instance.\n\nReal Example:\n\n• Database connection: Only one connection object for entire application\n• Configuration manager: Single source of configuration data\n• Logger: All logging goes through single logger instance\n• Prevents multiple instances that could cause conflicts\n• Like single president of a country"
    },
    {
      question: "What is Factory Pattern?",
      answer: "Factory pattern provides an interface for creating objects without specifying their concrete classes. It encapsulates object creation logic.\n\nReal Example:\n\n• VehicleFactory.createVehicle(\"car\") returns Car object\n• VehicleFactory.createVehicle(\"truck\") returns Truck object\n• Client code doesn't need to know specific classes\n• Easy to add new vehicle types without changing client code\n• Like car manufacturing plant - produces different models from same factory"
    },
    {
      question: "What is Observer Pattern?",
      answer: "Observer pattern defines a one-to-many relationship where multiple observers are notified when the subject state changes.\n\nReal Example:\n\n• News website: Subscribers get notified when new article published\n• Stock price: Multiple displays update when price changes\n• Event system: UI components react to user actions\n• Loose coupling between subject and observers\n• Like newspaper subscription - publisher doesn't know specific subscribers"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      <Navbar />

      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white border-b border-gray-300 dark:border-gray-700 mt-16">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            Object-Oriented Programming Interview Questions
          </h1>
          <p className="text-blue-100 text-lg">Comprehensive guide covering OOP concepts, design patterns, and principles</p>
          <div className="mt-4 flex items-center gap-4 text-sm text-blue-200">
            <span className="bg-white/10 px-3 py-1 rounded-full">30 Questions</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">Intermediate Level</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">Interview Prep</span>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 py-8 mt-20">
        <div className="space-y-8">
          {content.map((item, index) => (
            <section key={index} className={`border-b border-gray-200 dark:border-gray-700 pb-8 last:border-b-0 ${
              index % 2 === 0 ? 'bg-white dark:bg-gray-900' : 'bg-gray-50 dark:bg-gray-800'
            } p-6 rounded-lg shadow-sm`}>
              <h2 className="text-xl font-semibold mb-4 text-white bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-3 rounded-lg shadow-md">
                {index + 1}. {item.question}
              </h2>

              <div className="text-gray-700 dark:text-gray-300 leading-relaxed bg-white dark:bg-gray-700 p-6 rounded-lg border-l-4 border-blue-500 shadow-sm">
                {(() => {
                  const lines = item.answer.split('\n');
                  const elements = [];
                  let elementKey = 0;
                  
                  for (let i = 0; i < lines.length; i++) {
                    const line = lines[i];
                    
                    if (line.trim() === '') {
                      elements.push(<br key={`br-${elementKey++}`} />);
                      continue;
                    }
                    
                    // Check if this line starts a code block
                    if (line.trim() === '```java') {
                      // Find the end of the code block
                      const codeStartIndex = i + 1;
                      let codeEndIndex = codeStartIndex;
                      while (codeEndIndex < lines.length && lines[codeEndIndex].trim() !== '```') {
                        codeEndIndex++;
                      }
                      
                      const codeLines = lines.slice(codeStartIndex, codeEndIndex);
                      const code = codeLines.join('\n');
                      
                      elements.push(
                        <div key={`code-${elementKey++}`} className="my-4 rounded-lg overflow-hidden border border-gray-600">
                          <div className="bg-gray-800 px-4 py-2 text-sm text-gray-400 font-mono border-b border-gray-600">
                            Java
                          </div>
                          <SyntaxHighlighter
                            language="java"
                            style={vscDarkPlus}
                            customStyle={{
                              margin: 0,
                              padding: '16px',
                              fontSize: '14px',
                              lineHeight: '1.5',
                              background: '#1e1e1e'
                            }}
                          >
                            {code}
                          </SyntaxHighlighter>
                        </div>
                      );
                      
                      // Skip the code lines
                      i = codeEndIndex;
                    } else {
                      // Highlight important terms with different colors
                      const highlightedLine = line
                        .replace(/\b(OOP|Encapsulation|Abstraction|Inheritance|Polymorphism|Class|Object|Constructor|Destructor|Abstract Class|Interface|Composition|Aggregation|Association|Coupling|Cohesion|SOLID|Design Patterns|Singleton|Factory|Observer|Method Overloading|Method Overriding|Compile-time Polymorphism|Runtime Polymorphism|Default Constructor|Parameterized Constructor|Copy Constructor)\b/g, '<span class="bg-blue-200 dark:bg-blue-800 text-blue-900 dark:text-blue-100 px-2 py-1 rounded font-semibold">$1</span>')
                        .replace(/\b(this|super)\b/g, '<span class="bg-green-200 dark:bg-green-800 text-green-900 dark:text-green-100 px-2 py-1 rounded font-semibold">$1</span>')
                        .replace(/\b(Real Example|Example|Java Code Example)\b/g, '<span class="bg-purple-200 dark:bg-purple-800 text-purple-900 dark:text-purple-100 px-2 py-1 rounded font-semibold">$1</span>')
                        .replace(/•/g, '<span class="text-blue-600 dark:text-blue-400 font-bold">•</span>');

                      elements.push(
                        <p key={`text-${elementKey++}`} className="mb-4" dangerouslySetInnerHTML={{ __html: highlightedLine }} />
                      );
                    }
                  }
                  
                  return elements;
                })()}
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}