import { withLDConsumer } from 'launchdarkly-react-client-sdk';

// Pass the flags prop and return an element based on the state of the feature flag key
const myreactapp = ({ flags }) => {
    return flags.testDifferentBackground ? <div>Flag on</div> : <div>Flag off</div>;
};

export default withLDConsumer()(myreactapp);
