package main

import (
	"bufio"
	"fmt"
	"io"
	"net/http"
	"os"
	"strconv"
	"strings"
	"time"
)

const numberOfIterations = 2
const delay = 5

func main() {

	greetings()

	for {
		displayMenu()
		command := readCommand()

		switch command {
		case 1:
			startMonitoring()
		case 2:
			fmt.Println("Displaying Logs...")
			printLogs()
		case 3:
			fmt.Println("Exiting program...")
			os.Exit(0)
		default:
			fmt.Println("Invalid command")
			os.Exit(-1)
		}
	}

}

func greetings() {
	name := "User"
	version := 0.1
	fmt.Println("Hello Mr.", name)
	fmt.Println("Version:", version)
}

func displayMenu() {
	fmt.Println("1. Monitor")
	fmt.Println("2. Display Logs")
	fmt.Println("3. Exit")
	fmt.Println("Please select a command:")
}

func readCommand() int {
	var command int
	fmt.Scan(&command)
	fmt.Println("You selected command:", command)

	return command
}

func startMonitoring() {
	fmt.Println("Monitoring...")
	//website := "https://www.google.com"

	websites := readWebsiteFromFile()

	for i := 0; i < numberOfIterations; i++ {
		for i, website := range websites {
			fmt.Println("Checking website", i, ":", website)
			checkWebsite(website)
		}

		fmt.Println()
		time.Sleep(delay * time.Second)
	}

}

func checkWebsite(website string) {
	resp, err := http.Get(website)

	if err != nil {
		fmt.Println("Error checking website:", err)
	}

	if resp.StatusCode == 200 {
		fmt.Println("Website:", website, "is up!")
		writeLogs(website, true)
	} else {
		fmt.Println("Website:", website, "is down! Status Code:", resp.StatusCode)
		writeLogs(website, false)
	}
}

func readWebsiteFromFile() []string {
	var websites []string

	file, err := os.Open("websites.txt")
	if err != nil {
		fmt.Println("Error opening file:", err)
	}

	reader := bufio.NewReader(file)
	for {
		line, err := reader.ReadString('\n')
		line = strings.TrimSpace(line)

		websites = append(websites, line)

		if err == io.EOF {
			break
		}
	}

	file.Close()

	return websites
}

func writeLogs(website string, status bool) {
	file, err := os.OpenFile("logs.txt", os.O_APPEND|os.O_CREATE|os.O_RDWR, 0644)
	if err != nil {
		fmt.Println("Error opening logs file:", err)
	}

	file.WriteString(time.Now().Format("02/01/2006 15:04:05") + " - " + website + " - Online: " + strconv.FormatBool(status) + "\n")

	file.Close()
}

func printLogs() {
	file, err := os.ReadFile("logs.txt")

	if err != nil {
		fmt.Println("Error reading logs file:", err)
	}
	fmt.Println(string(file))
}
