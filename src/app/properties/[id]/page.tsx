interface Params {
    id: string;
}

const IdPropertyPage = ({ params }: { params: Params }) => {

    return (
        <div className="pt-[100px] pl-5">
            <p>ID Property Page {params.id}</p>
        </div>
    );
}

export default IdPropertyPage;