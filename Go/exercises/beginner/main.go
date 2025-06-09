package main

import (
	"fmt"
)

func main() {
	// ####### Beginner Exercises #######

	//fmt.Println("Hello World")

	//sum := sum2Numbers()
	//fmt.Println("Sum of two numbers is:", sum)

	//oddOrEven()

	//multiplicationTable(5)

	//numbers := askNumbers()
	//calculateAverage(numbers)

	//evaluateGrade(9.5)
	//evaluateGrade(-1)
	//evaluateGrade(4.5)
	//evaluateGrade(6.5)

	//higher := max(10, 10)
	//fmt.Println("The higher number is:", higher)

	// ####### Intermediate Exercises #######
}

func sum2Numbers() int {
	fmt.Println("Please provide two numbers")
	var a, b int
	fmt.Scanf("%d %d", &a, &b)
	return a + b
}

func oddOrEven() {
	fmt.Println("Provide a number")
	var number int
	fmt.Scanf("%d", &number)
	if number%2 == 0 {
		fmt.Println("Even")
	} else {
		fmt.Println("Odd")
	}
}

func multiplicationTable(number int) {
	for i := 1; i <= 10; i++ {
		fmt.Println(number, "x", i, "=", number*i)
	}
}

func askNumbers() []float32 {
	var numbers []float32
	for i := 0; i < 5; i++ {
		fmt.Println("Please provide a number")
		var number float32
		fmt.Scanln(&number)
		numbers = append(numbers, number)
	}
	return numbers
}

func calculateAverage(numbers []float32) {
	sum := float32(0)
	for i := 0; i < len(numbers); i++ {
		sum += numbers[i]
	}
	avg := sum / (float32(len(numbers)))
	fmt.Println("The average is:", avg)

}

func evaluateGrade(grade float32) {
	if grade < 0 || grade > 10 {
		fmt.Println("Invalid grade. Please enter a number between 0 and 10.")
	} else if grade < 5 {
		fmt.Println("Failed. Try again next time.")
	} else if grade < 7 {
		fmt.Println("You passed, but you can do better.")
	} else {
		fmt.Println("Congratulations! You passed with a good grade.")
	}
}

func max(a, b int) int {
	if a >= b {
		return a
	}
	return b
}
