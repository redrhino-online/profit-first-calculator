# Profit First Allocations Calculator

## Overview

The **Profit First Allocations Calculator** is a financial tool based on the "Profit First" methodology. It allows individuals and businesses to divide their income into distinct categories such as profit, owner’s pay, taxes, and operating expenses. This approach helps prioritize profit, ensuring that it's not an afterthought but rather the cornerstone of the financial strategy.

The calculator takes in:
- Total Income
- Percentage allocation for Profit, Owner's Pay, and Taxes

It then provides a breakdown of the dollar amounts allocated to each category. The remaining income is automatically allocated for operating expenses.

This tool is ideal for:
- **Entrepreneurs**
- **Small Business Owners**
- **Freelancers**
- **Individuals looking to manage personal finances more efficiently**

By visualizing how their revenue is distributed, users can ensure they are allocating the proper portions of their income to the right categories while adhering to the Profit First philosophy.

## Features
- Input fields for total income and percentage allocation to Profit, Owner Pay, and Tax.
- Automatically calculates and displays allocated amounts for each category.
- Validates that the sum of Profit, Owner Pay, and Tax percentages does not exceed 100%.
- Real-time updates to allocations as values are inputted.
- Prevents calculations when combined percentages exceed 100%, displaying a helpful alert message.

## Technologies Used

### Core Technologies:
- **[Vue 3](https://vuejs.org/)**: A progressive JavaScript framework for building user interfaces.
- **[Vuetify](https://vuetifyjs.com/)**: A Vue UI Library with beautifully handcrafted Material components.
- **[Pinia](https://pinia.vuejs.org/)**: A state management library for Vue 3, replacing Vuex with a more intuitive API.

### Additional Technologies:
- **JavaScript (ES6+)**: For writing logic and interacting with the Vue components.
- **HTML5 & CSS3**: Used for the layout and styling of the application.
- **Vite**: A fast development build tool for Vue applications.

## Installation and Setup

### Prerequisites:
- **Node.js** (version 14.x or higher) and **npm** (version 6.x or higher) should be installed on your system.

### Steps to Install and Run the Application:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/redrhino-online/profit-first-calculator.git
   cd profit-first-calculator
   ```

2. **Install Dependencies:**
   Install all required dependencies by running the following command:
   ```bash
   npm install
   ```

3. **Run the Application:**
   Start the development server using:
   ```bash
   npm run dev
   ```

4. **Access the Application:**
   After running the server, you can access the application by navigating to `http://localhost:3000` in your web browser.

### Build for Production:
To build the application for production, run:
```bash
npm run build
```
This will generate the production-ready static files in the `dist/` directory.

## Usage Instructions

1. Enter your **Total Income** in the first field.
2. Specify the percentage you wish to allocate to **Profit**, **Owner Pay**, and **Tax**.
3. Ensure that the combined total of these percentages is less than 100%. If not, an alert will notify you, and no calculation will be performed.
4. The app will automatically calculate and display the dollar amounts allocated to each category (Profit, Owner Pay, Tax, and Operating Expenses).
5. The breakdown will be visible in the **Allocation Breakdown** section in real-time.

## Use Case

The Profit First Allocations Calculator is built to help users adhere to the **Profit First** financial management strategy developed by Mike Michalowicz. The concept of Profit First is to prioritize profit from the start instead of treating it as the leftover result after all expenses are covered. By making consistent allocations from revenue, businesses can improve profitability and maintain healthy cash flows.

This calculator simplifies that process by providing a quick, real-time breakdown of how revenue should be split across Profit, Owner Pay, Taxes, and Operating Expenses. Entrepreneurs, small business owners, and individuals can use this tool to enforce better budgeting practices, making sure profit is a consistent focus in their financial planning.

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/redrhino-online/profit-first-calculator/issues) if you want to contribute or report a bug.

To contribute:
1. Fork the repository.
2. Create a new branch for your feature or bugfix (`git checkout -b feature/my-new-feature`).
3. Commit your changes (`git commit -am 'Add some feature'`).
4. Push to the branch (`git push origin feature/my-new-feature`).
5. Create a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or feedback, feel free to contact us via:
- Email: dave@redrhino.online
- GitHub: [superdave2u](https://github.com/superdave2u)