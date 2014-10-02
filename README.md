How to use?
----------

0. Fork the repository

1. Clone the forked repository

2. Start a web server at the root directory of the cloned repository (ngd3jmeter). I use Python command - python -m SimpleHTTPServer 9988

3. Now open a web browser and type the URL http://localhost:9988/ you should see the main web page having a navigation bar

4. You can change the data in the data directory and update the template files under the template directory in order to use your data for various plots.

5. Hovering the mouse on the transaction point will display the elapsed time and transaction name

6. An option to filter the plot by elapsed or Latency. You can use JavaScript regex patters to filter.

7. Bar plot added. Hovering mouse on the bars will diaply more metric

8. Added throughput plot. Hovering the mouse over the cirle displays the actual value

You can see it by visiting: http://smarigowda.github.io/ngd3jmeter/
    
