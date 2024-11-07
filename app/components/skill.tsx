export default function Skill() {
    return (
        <div className="container mx-auto p-2 text-center pt-15">
        <h2 className="text-2xl text-gray-500">Skills</h2>
        <RowSkill skil="Bahasa Inggris" tingkat="Intermediate"/>
        <RowSkill skil="Bahasa Pemrograman" tingkat="Basic"/>
        <RowSkill skil="Komunikasi" tingkat="Intermediate"/>
        <RowSkill skil="Microsoft Office" tingkat="Intermediate"/>
      </div>
    );
}

interface RowSkillProps {
    skil: string;
    tingkat: string;
    
  }
  
  function RowSkill(props: RowSkillProps) {
    return (
      <div className="rounded-lg bg-gray-300 p-2 my-5">
      <div className="container mx-auto ">
        <div className="grid grid-cols-12 gap-1 text-black">
          <div className="col-span-12 md:col-span-6">{props.skil}</div>
          <div className="col-span-12 md:col-span-6">{props.tingkat}</div>
        </div>
      </div>
      </div>
    );
  }
  