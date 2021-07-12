import React from "react";

const withData = (View, getData, LoadingView) => {
    return class extends React.Component {
        state = {
            data: null,
        };

        componentDidMount() {
            getData().then((resp) => {
                this.setState({
                    data: resp.data,
                });
            });
        }

        render() {
            const { data } = this.state;

            if (!data) {
                return LoadingView ? <LoadingView /> : null;
            }

            return <View {...this.props} data={data} />;
        }
    };
};

export default withData;
