import React from "react";
import Converter from "../../components/Converter/Converter";
import ApiService from "../../Services/ApiService";

import withData from "../../components/hoc-helpers/withData";

const apiService = new ApiService();

const WithData = withData(Converter, apiService.getResource);

const ConverterPage = () => {
    return (
        <main className="main container">
            <WithData />
        </main>
    );
};

export default ConverterPage;
