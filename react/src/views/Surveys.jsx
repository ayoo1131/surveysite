import PageComponent from "../components/PageComponent"
import SurveyListItem from "../components/SurveyListItem";
import { useStateContext } from "../contexts/ContextProvider"
import TButton from "../components/core/TButton";
import { PlusCircleIcon } from "@heroicons/react/24/outline";

export default function Surveys(){
    const {surveys} = useStateContext();
    console.log(surveys);

    const onDeleteClick = () =>{
        console.log("On Delete Click");
    }

    return(
        <PageComponent title="Surveys"
             buttons={(
                <TButton color="green" to="/surveys/create">
                    <PlusCircleIcon className="h-6 w-6 mr-2" />
                    Create New
                </TButton>
             )}>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 md:crid-cols-4">
                {surveys.map(survey=>(
                    <SurveyListItem survey={survey} key = {survey.id} onDeleteClick={onDeleteClick} />
                ))}
            </div>
        </PageComponent>
    )
}

