import PageSection from "../../common/PageSection";
import ConfigurationPage from "./ConfigurationPage"

const ConfigurationApp: React.FC = () => {
    return (
        <div>
            <PageSection
                title="Ustawienia"
                body={<ConfigurationPage />}
            />
        </div>
    )
};

export default ConfigurationApp;