import { calculateInvestmentResults, formatter } from "../util/investment.js";

const Result = ({ userInputValues }) => {
  const resultsData = calculateInvestmentResults(userInputValues);
  const initialInvestment =
    resultsData[0].valueEndOfYear -
    resultsData[0].interest -
    resultsData[0].annualInvestment;

  return (
    <table id='result'>
      <thead>
        <tr>
          <td>Year</td>
          <td>Investment Value</td>
          <td>Interest (Year)</td>
          <td>Total Interest</td>
          <td>Invested Capital</td>
        </tr>
      </thead>
      <tbody>
        {resultsData.map((data) => {
          const totalInterest =
            data.valueEndOfYear -
            data.annualInvestment * data.year -
            initialInvestment;
          const totalAmmountInvested = data.valueEndOfYear - totalInterest;

          return (
            <tr key={data.year}>
              <td>{data.year}</td>
              <td>{formatter.format(data.valueEndOfYear)}</td>
              <td>{formatter.format(data.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Result;
