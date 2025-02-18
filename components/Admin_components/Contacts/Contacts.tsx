import { GetContacts } from "@/components/Actions/ContactActions";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default async function Contacts() {
  const contacts = await GetContacts();
  return (
    <section className="px-3 sm:px-9 my-5">
      <h2 className="text-[#AD9A74] font-black text-[30px] sm:text-[50px]">
        Contacts
      </h2>
      <div className="py-5 flex items-center justify-center gap-3 sm:gap-5 flex-wrap">
        {contacts.map((data) => (
          <div
            key={data.id}
            className="flex flex-col gap-3 overflow-hidden border border-[#856B39] max-w-[400px] sm:p-4 p-2 rounded-lg"
          >
            <AccountCircleIcon className="text-[60px] text-[#856B39]" />
            <div className="flex gap-1 flex-col">
              <h2 className="font-bold text-[25px] text-[#856B39]">Name:</h2>
              <p className="text-[#AD9A74] text-[20px]">{data.name}</p>
            </div>
            <div className="flex gap-1 flex-col">
              <h2 className="font-bold text-[25px] text-[#856B39]">Email:</h2>
              <p className="text-[#AD9A74] text-[20px]">{data.email}</p>
            </div>
            <div className="flex gap-1 flex-col">
              <h2 className="font-bold text-[25px] text-[#856B39]">message:</h2>
              <p className="text-[#AD9A74] text-[20px]">{data.message}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
