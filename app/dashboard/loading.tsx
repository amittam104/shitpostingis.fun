import { LoaderCircle } from "lucide-react";

function loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <LoaderCircle className="h-8 w-8 animate-spin" />
    </div>
  );
}

export default loading;
