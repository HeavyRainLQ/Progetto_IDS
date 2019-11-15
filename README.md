# Accounting for lump sum jobs

This is an academic project aimed to experiment the use of a blockchain as a tool to better manage tenders in the construction sector.

## Getting started
## Prerequisites
- NodeJS v8.9.4 or higher
- Windows, Linux or Mac OS X
- Xampp

## Blockchain installation

Start by opening up a terminal and run
```bash
npm install -g truffle
```
Once it finished installing Truffle run
```bash
npm install -g ganache-cli
```
Once Ganache is set up, open up a new terminal inside our project directory and run
```bash
ganache-cli -gasLimit=0x1fffffffffffff 
```
Now that we have unlimited gas for our transactions, run
```bash
truffle migrate  
```
to migrate our smart contracts to our blockchain

Now move in angular project folder (progetto-IDS) and run the server with proxy 
```bash
npm start  
```
## Server installation
Start up Xampp and activate Apache and MySQL services, go to the Admin section and import to phpMyAdmin our ids.sql file, found in /progetto-IDS/api/ directory in our project

## App installation
- Copy progetto-IDS/api directory inside C:\xampp\htdocs and change connection.php (found in API directory inside the main directory) credentials according to Xampp ones if necessary.
- Open your browser and digit http://localhost:4200 or http://127.0.0.1:4200

## Usage
Now you can log in to our Dapp using different credentials according to which user you are!
Username: admin 
Password: admin

## Built with
- [Angular](https://angular.io/)
- [Truffle](https://www.trufflesuite.com/)
- [Ganache](https://www.trufflesuite.com/ganache) 

## Authors
- Angelo Serafini
- Elia Alesiani
- Fabio Russo
- Jose Junior Paricagua Siñani
- Luca Quercetti
