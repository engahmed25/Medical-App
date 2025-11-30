import {
  FiAlertCircle,
  FiCalendar,
  FiCheckCircle,
  FiClipboard,
  FiClock,
  FiCreditCard,
  FiDroplet,
  FiFileText,
  FiHash,
  FiHeart,
  FiHome,
  FiLogOut,
  FiMessageCircle,
  FiMessageSquare,
  FiPlusCircle,
  FiSettings,
  FiUploadCloud,
  FiUser,
  FiVideo,
} from "react-icons/fi";

const navItems = [
  { label: "Dashboard", icon: FiHome, active: true },
  { label: "Appointments", icon: FiCalendar },
  { label: "Medical History", icon: FiFileText },
  { label: "Chat with Doctor", icon: FiMessageCircle },
  { label: "Payments", icon: FiCreditCard },
  { label: "Upload Files", icon: FiUploadCloud },
  { label: "Settings", icon: FiSettings },
];

const appointments = [
  {
    doctor: "Dr. Emily Carter",
    specialty: "Cardiology",
    date: "Mon, Dec 9",
    time: "09:30 AM",
    status: "confirmed",
    action: "Join Video Call",
  },
  {
    doctor: "Dr. Omar Rahman",
    specialty: "Dermatology",
    date: "Wed, Dec 11",
    time: "12:15 PM",
    status: "pending",
    action: "Details",
  },
  {
    doctor: "Dr. Laila Nassar",
    specialty: "Nutrition",
    date: "Fri, Dec 13",
    time: "04:00 PM",
    status: "confirmed",
    action: "Join Video Call",
  },
];

const prescriptions = [
  {
    name: "Atorvastatin 20mg",
    schedule: "After breakfast",
    due: "Due in 30m",
    urgency: "due-soon",
  },
  {
    name: "Metformin 500mg",
    schedule: "12:00 PM",
    due: "In 3h",
    urgency: "on-track",
  },
  {
    name: "Vitamin D",
    schedule: "Tonight",
    due: "Optional",
    urgency: "low",
  },
];

const uploads = [
  { name: "Chest X-Ray.png", type: "Imaging", time: "Today, 09:10 AM" },
  { name: "Blood Panel.pdf", type: "Lab Report", time: "Yesterday, 05:22 PM" },
  { name: "Allergy Notes.docx", type: "Notes", time: "Nov 26, 02:48 PM" },
];

const quickActions = [
  {
    label: "Reserve Appointment",
    icon: FiCalendar,
    bg: "from-[#0057FF] to-[#5a8dff]",
  },
  {
    label: "Upload Report",
    icon: FiUploadCloud,
    bg: "from-[#2fa6ff] to-[#79c5ff]",
  },
  {
    label: "Start Chat",
    icon: FiMessageCircle,
    bg: "from-[#0bb5ff] to-[#5ae4ff]",
  },
];

const statusClasses = {
  confirmed: "bg-emerald-50 text-emerald-700 border border-emerald-100",
  pending: "bg-amber-50 text-amber-700 border border-amber-100",
};

function PatientDashboard() {
  const heartRate = [72, 76, 74, 80, 78, 82, 79];
  const sparkHeight = 42;
  const sparkWidth = 160;
  const minValue = Math.min(...heartRate) - 2;
  const maxValue = Math.max(...heartRate) + 2;
  const range = maxValue - minValue || 1;

  const sparkPath = heartRate
    .map((value, index) => {
      const x = (index / Math.max(heartRate.length - 1, 1)) * sparkWidth;
      const y = sparkHeight - ((value - minValue) / range) * sparkHeight;
      return `${index === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");

  return (
    <div className="min-h-screen bg-[#E8F0FF] text-[#0B1D4A] flex">
      <aside className="w-72 bg-gradient-to-b from-[var(--main-color)] to-[var(--main-lite-color)] text-white p-6 flex flex-col gap-6 shadow-2xl">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-2xl bg-white/15 border border-white/25 flex items-center justify-center text-xl font-semibold">
            AP
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.08em] text-white/70">
              Patient
            </p>
            <p className="font-semibold text-lg">Dashboard</p>
          </div>
        </div>

        <nav className="flex-1 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.label}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-150 border border-transparent
                ${
                  item.active
                    ? "bg-white/20 text-white shadow-lg shadow-[#0000001a] border-white/25"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                <Icon className="text-lg" />
                <span className="font-semibold">{item.label}</span>
              </button>
            );
          })}
        </nav>

        <button className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/10 text-white font-semibold hover:bg-white/20 transition border border-white/20">
          <FiLogOut className="text-lg" />
          Logout
        </button>
      </aside>

      <div className="flex-1 p-6 lg:p-10 space-y-6">
        <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.08em] text-[#2d5cff] font-semibold">
              Welcome back
            </p>
            <h1 className="text-3xl lg:text-4xl font-bold">
              Patient Dashboard
            </h1>
            <p className="text-sm text-slate-600 mt-1">
              Track your appointments, health insights, and quick actions in one
              place.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="px-4 py-2 rounded-full bg-white/80 border border-[#dfe7ff] shadow-sm text-sm text-slate-600">
              Last synced: 5 minutes ago
            </div>
            <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0057FF] text-white font-semibold shadow-lg shadow-[#0057ff40]">
              <FiPlusCircle /> New Request
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <div className="space-y-6">
            <div className="bg-white/90 border border-[#dfe7ff] rounded-2xl shadow-lg shadow-[#0057ff1a] p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <div className="h-20 w-20 rounded-3xl bg-gradient-to-br from-[#0057FF] to-[#7eb0ff] text-white text-2xl font-bold flex items-center justify-center shadow-md">
                  AP
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h2 className="text-2xl font-semibold">Aisha Patel</h2>
                      <p className="text-sm text-slate-500">
                        Patient ID: #P-48291
                      </p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#E8F0FF] text-[#0057FF] text-xs font-semibold">
                      Active
                    </span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4 text-sm text-slate-600">
                    <div className="flex items-center gap-2">
                      <span className="h-8 w-8 rounded-xl bg-[#E8F0FF] text-[#0057FF] flex items-center justify-center">
                        <FiCalendar />
                      </span>
                      <div>
                        <p className="text-xs text-slate-500">Age / Gender</p>
                        <p className="font-semibold text-[#0B1D4A]">
                          32 • Female
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="h-8 w-8 rounded-xl bg-[#E8F0FF] text-[#0057FF] flex items-center justify-center">
                        <FiUser />
                      </span>
                      <div>
                        <p className="text-xs text-slate-500">Blood Type</p>
                        <p className="font-semibold text-[#0B1D4A]">O+</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="h-8 w-8 rounded-xl bg-[#E8F0FF] text-[#0057FF] flex items-center justify-center">
                        <FiDroplet />
                      </span>
                      <div>
                        <p className="text-xs text-slate-500">Allergies</p>
                        <p className="font-semibold text-[#0B1D4A]">
                          Penicillin
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="h-8 w-8 rounded-xl bg-[#E8F0FF] text-[#0057FF] flex items-center justify-center">
                        <FiHash />
                      </span>
                      <div>
                        <p className="text-xs text-slate-500">Member Since</p>
                        <p className="font-semibold text-[#0B1D4A]">2021</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="h-8 w-8 rounded-xl bg-[#E8F0FF] text-[#0057FF] flex items-center justify-center">
                        <FiClipboard />
                      </span>
                      <div>
                        <p className="text-xs text-slate-500">Care Plan</p>
                        <p className="font-semibold text-[#0B1D4A]">
                          Cardio + Nutrition
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/90 border border-[#dfe7ff] rounded-2xl shadow-lg shadow-[#0057ff1a] p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Upcoming Appointments</h3>
                <button className="text-sm font-semibold text-[#0057FF] px-3 py-1.5 bg-[#E8F0FF] rounded-full">
                  View Calendar
                </button>
              </div>
              <div className="space-y-3">
                {appointments.map((appt) => (
                  <div
                    key={`${appt.doctor}-${appt.time}`}
                    className="flex gap-4 p-4 rounded-xl bg-[#F7FAFF] border border-[#dfe7ff]"
                  >
                    <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-[#5a8dff] to-[#99bfff] text-white flex items-center justify-center shadow-inner">
                      <FiCalendar className="text-xl" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <p className="font-semibold text-[#0B1D4A]">
                            {appt.doctor}
                          </p>
                          <p className="text-sm text-slate-500">
                            {appt.specialty}
                          </p>
                        </div>
                        <span
                          className={`px-3 py-1 text-xs font-semibold rounded-full ${
                            statusClasses[appt.status]
                          }`}
                        >
                          {appt.status === "confirmed"
                            ? "Confirmed"
                            : "Pending"}
                        </span>
                      </div>
                      <div className="flex items-center justify-between mt-3 gap-4">
                        <p className="text-sm text-slate-600 flex items-center gap-2">
                          <FiClock className="text-[#0057FF]" />
                          {appt.date} · {appt.time}
                        </p>
                        <button
                          className={`inline-flex items-center gap-2 px-3 py-2 text-sm font-semibold rounded-lg transition
                          ${
                            appt.action === "Join Video Call"
                              ? "bg-[#0057FF] text-white shadow-md shadow-[#0057ff33]"
                              : "bg-white text-[#0057FF] border border-[#c8d9ff]"
                          }`}
                        >
                          {appt.action}
                          {appt.action === "Join Video Call" && <FiVideo />}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/90 border border-[#dfe7ff] rounded-2xl shadow-lg shadow-[#0057ff1a] p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Health Analysis</h3>
                <span className="text-xs text-slate-500">Updated 2h ago</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-[#e5edff] bg-[#F7FAFF]">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-slate-500">Heart Rate</p>
                      <p className="text-2xl font-bold text-[#0B1D4A]">
                        78 bpm
                      </p>
                      <p className="text-xs text-emerald-600 font-semibold flex items-center gap-1">
                        <FiHeart /> Stable
                      </p>
                    </div>
                    <span className="inline-flex items-center text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                      +4 this week
                    </span>
                  </div>
                  <svg
                    viewBox={`0 0 ${sparkWidth} ${sparkHeight}`}
                    className="w-full h-16 mt-3"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient
                        id="heartLine"
                        x1="0"
                        x2="1"
                        y1="0"
                        y2="0"
                      >
                        <stop offset="0%" stopColor="#0057FF" />
                        <stop offset="100%" stopColor="#7fb2ff" />
                      </linearGradient>
                      <linearGradient
                        id="heartFill"
                        x1="0"
                        x2="0"
                        y1="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="#0057FF"
                          stopOpacity="0.22"
                        />
                        <stop
                          offset="100%"
                          stopColor="#0057FF"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>
                    <path
                      d={sparkPath}
                      fill="none"
                      stroke="url(#heartLine)"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <path
                      d={`${sparkPath} L ${sparkWidth},${sparkHeight} L 0,${sparkHeight} Z`}
                      fill="url(#heartFill)"
                    />
                  </svg>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl border border-[#e5edff] bg-white">
                    <p className="text-xs text-slate-500">BMI</p>
                    <p className="text-xl font-semibold text-[#0B1D4A]">22.8</p>
                    <p className="text-xs text-emerald-600 font-semibold">
                      Healthy range
                    </p>
                  </div>
                  <div className="p-3 rounded-xl border border-[#e5edff] bg-white">
                    <p className="text-xs text-slate-500">Last Checkup</p>
                    <p className="text-sm font-semibold text-[#0B1D4A]">
                      Nov 22, 2025
                    </p>
                    <p className="text-xs text-slate-500">Dr. Emily Carter</p>
                  </div>
                  <div className="p-3 rounded-xl border border-[#e5edff] bg-white col-span-2">
                    <div className="flex items-start gap-3">
                      <span className="h-9 w-9 rounded-xl bg-[#E8F0FF] text-[#0057FF] flex items-center justify-center">
                        <FiClipboard />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-[#0B1D4A]">
                          Medications
                        </p>
                        <p className="text-xs text-slate-500">
                          Morning pills taken, evening dose scheduled at 8:00
                          PM.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 mt-3">
                      <span className="h-9 w-9 rounded-xl bg-[#E8F0FF] text-[#0057FF] flex items-center justify-center">
                        <FiMessageSquare />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-[#0B1D4A]">
                          Doctor Notes
                        </p>
                        <p className="text-xs text-slate-500">
                          Keep daily hydration above 2L and add light cardio
                          twice a week.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white/90 border border-[#dfe7ff] rounded-2xl shadow-lg shadow-[#0057ff1a] p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Quick Actions</h3>
                <span className="text-xs text-slate-500">
                  Access your most-used tasks
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {quickActions.map((action) => {
                  const Icon = action.icon;
                  return (
                    <button
                      key={action.label}
                      className={`relative overflow-hidden rounded-xl text-left text-white font-semibold p-4 shadow-md shadow-[#0057ff1f] bg-gradient-to-br ${action.bg}`}
                    >
                      <Icon className="text-xl mb-3 opacity-90" />
                      <p className="leading-tight">{action.label}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="bg-white/90 border border-[#dfe7ff] rounded-2xl shadow-lg shadow-[#0057ff1a] p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">
                  Prescription Reminders
                </h3>
                <button className="text-sm font-semibold text-[#0057FF] px-3 py-1.5 bg-[#E8F0FF] rounded-full">
                  Manage
                </button>
              </div>
              <div className="space-y-3">
                {prescriptions.map((rx) => (
                  <div
                    key={rx.name}
                    className="flex items-center gap-3 p-3 rounded-xl bg-[#F7FAFF] border border-[#e5edff]"
                  >
                    <div className="h-10 w-10 rounded-xl bg-[#E8F0FF] text-[#0057FF] flex items-center justify-center">
                      {rx.urgency === "due-soon" ? (
                        <FiAlertCircle className="text-lg" />
                      ) : (
                        <FiCheckCircle className="text-lg" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-[#0B1D4A]">{rx.name}</p>
                      <p className="text-xs text-slate-500">{rx.schedule}</p>
                    </div>
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full border
                      ${
                        rx.urgency === "due-soon"
                          ? "bg-amber-50 text-amber-700 border-amber-100"
                          : "bg-emerald-50 text-emerald-700 border-emerald-100"
                      }`}
                    >
                      {rx.due}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/90 border border-[#dfe7ff] rounded-2xl shadow-lg shadow-[#0057ff1a] p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Recent Uploads</h3>
                <button className="text-sm font-semibold text-[#0057FF] px-3 py-1.5 bg-[#E8F0FF] rounded-full flex items-center gap-2">
                  <FiUploadCloud />
                  Add File
                </button>
              </div>
              <div className="space-y-3">
                {uploads.map((file) => (
                  <div
                    key={file.name}
                    className="flex items-center gap-3 p-3 rounded-xl bg-[#F7FAFF] border border-[#e5edff]"
                  >
                    <div className="h-10 w-10 rounded-xl bg-white text-[#0057FF] border border-[#dfe7ff] flex items-center justify-center">
                      <FiFileText />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-[#0B1D4A]">
                        {file.name}
                      </p>
                      <p className="text-xs text-slate-500">
                        {file.type} • {file.time}
                      </p>
                    </div>
                    <span className="text-xs font-semibold text-[#0057FF]">
                      View
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientDashboard;
