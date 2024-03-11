<?php

class Travel
{
    // Enter your code here
    public function getData()
    {
        $api_url = 'https://5f27781bf5d27e001612e057.mockapi.io/webprovise/travels';
        $json_data = file_get_contents($api_url);

        $response_data = json_decode($json_data);

        return $response_data;
    }
}

class Company
{
    // Enter your code here
    public function getData()
    {
        $api_url = 'https://5f27781bf5d27e001612e057.mockapi.io/webprovise/companies';
        $json_data = file_get_contents($api_url);

        $response_data = json_decode($json_data);

        return $response_data;
    }
}

class TestScript
{
    protected $company;
    protected $travel;

    public function __construct($company, $travel)
    {
        $this->company = $company;
        $this->travel = $travel;
    }

    public function getTotalCostEachCompany($company)
    {
        $list_travel = $this->travel->getData();
        $company->cost = 0;
        foreach ($list_travel as $item) {
            if ($item->companyId == $company->id) {
                $company->cost += (int)strtok($item->price, '.');
            }
        }
        return $company;
    }

    public function execute()
    {
        foreach ($this->company->getData() as $item) {
            $company = $this->getTotalCostEachCompany($item);
            echo json_encode($company, JSON_PRETTY_PRINT);
            echo "<br>";
        }
    }
}
$company = new Company();
$travel = new Travel();
(new TestScript($company, $travel))->execute();
