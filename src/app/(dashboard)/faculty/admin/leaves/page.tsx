import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Calendar,
  Clock,
  FileText,
  CheckCircle2,
  XCircle,
  Plus,
  ArrowRight,
  Info,
  CalendarDays,
  Briefcase
} from "lucide-react"
import { getFacultyAdminData } from "@/lib/actions"
import { Button } from "@/components/ui/button"

export default async function FacultyLeaves() {
  const faculty = await getFacultyAdminData()
  if (!faculty) return <div className="p-10 text-white">Unauthorized.</div>

  const leaves = (faculty as any).leaves || []
  
  return (
    <div className="space-y-8 pb-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black text-white tracking-tight uppercase italic">Faculty Residency Ledger</h1>
          <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mt-1">Leave Balances, Permissions & Duty Allocations</p>
        </div>
        <div className="flex items-center gap-3">
          <Badge className="bg-indigo-600/10 text-indigo-400 border border-indigo-500/20 px-3 py-1 uppercase font-black text-[10px]">Active Session</Badge>
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white font-black uppercase text-[10px] tracking-wider">
            <Plus className="w-4 h-4 mr-2" /> Submit Absence Request
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <QuotaCard label="Casual Leave" used={4} total={12} color="indigo" />
        <QuotaCard label="Medical Leave" used={2} total={15} color="emerald" />
        <QuotaCard label="Duty Leave" used={8} total={20} color="amber" />
        <QuotaCard label="Sabbatical (Yrs)" used={0} total={1} color="purple" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <Card className="bg-[#0A0A0B]/80 border-white/10 overflow-hidden backdrop-blur-3xl shadow-2xl">
            <CardHeader className="bg-black/40 border-b border-white/5 py-4">
              <CardTitle className="text-white text-sm uppercase font-black italic tracking-widest flex items-center gap-2">
                <Clock className="w-4 h-4 text-indigo-500" /> Active Absence Pipeline
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y divide-white/5">
                {leaves.length > 0 ? (
                  leaves.map((leave: any, i: number) => (
                    <div key={i} className="p-6 flex items-center justify-between hover:bg-white/[0.01] transition-colors">
                      <div className="flex gap-6 items-center">
                        <div className="w-12 h-12 rounded-xl border flex items-center justify-center bg-white/5 border-white/10 text-indigo-400">
                          <CalendarDays className="w-6 h-6" />
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <h4 className="text-white font-black text-sm uppercase tracking-tight">
                              {leave.reason || "Absence Request"}
                            </h4>
                            <Badge className={`text-[10px] font-black uppercase border-none ${leave.status === 'APPROVED' ? 'bg-emerald-500/10 text-emerald-400' : leave.status === 'REJECTED' ? 'bg-rose-500/10 text-rose-400' : 'bg-amber-500/10 text-amber-400'}`}>
                              {leave.status}
                            </Badge>
                          </div>
                          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest leading-relaxed">
                            From: {new Date(leave.fromDate).toLocaleDateString()} - To: {new Date(leave.toDate).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="p-20 text-center opacity-40">
                    <CalendarDays className="w-16 h-16 mx-auto mb-4" />
                    <p className="text-[10px] uppercase font-black tracking-widest">No absence records found</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          <Card className="bg-[#0A0A0B]/80 border-white/10 p-6 space-y-6">
            <h4 className="text-white font-black text-xs uppercase tracking-widest border-b border-white/5 pb-4 italic">Policies & Guides</h4>
            <div className="space-y-4">
              <PolicyItem label="Emergency Accrual" value="Immediate" />
              <PolicyItem label="Prior Notice Reqd." value="48 Hours" />
              <PolicyItem label="Approval Workflow" value="HOD -> Dean" />
              <PolicyItem label="Carry Forward Limit" value="05 Days" />
            </div>
            <div className="pt-4 border-t border-white/5">
              <Button className="w-full bg-white/5 text-gray-400 border-white/5 text-[10px] font-black uppercase tracking-widest hover:bg-white/10 hover:text-white">
                Download Policy Handbook
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

function QuotaCard({ label, used, total, color }: any) {
  const colorMap: any = {
    indigo: "text-indigo-400 border-indigo-500/20 bg-indigo-500/5",
    emerald: "text-emerald-400 border-emerald-500/20 bg-emerald-500/5",
    amber: "text-amber-400 border-amber-500/20 bg-amber-500/5",
    purple: "text-purple-400 border-purple-500/20 bg-purple-500/5"
  }
  const percent = (used / total) * 100
  return (
    <Card className="bg-[#0A0A0B]/80 border-white/10 hover:border-white/20 transition-all backdrop-blur-2xl overflow-hidden">
      <CardContent className="p-6 space-y-4 relative z-10">
        <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest">{label}</p>
        <div className="flex items-baseline justify-between">
          <p className="text-3xl font-black text-white tracking-tight tabular-nums">{total - used}</p>
          <p className="text-[10px] text-gray-600 font-black uppercase">Remaining Credits</p>
        </div>
        <div className="h-1 bg-white/5 rounded-full overflow-hidden">
          <div className={`h-full ${colorMap[color].split(' ')[0].replace('text-', 'bg')} transition-all`} style={{ width: `${percent}%` }} />
        </div>
      </CardContent>
    </Card>
  )
}

function PolicyItem({ label, value }: any) {
  return (
    <div className="flex items-center justify-between">
      <p className="text-[11px] text-gray-400 font-black uppercase tracking-tight">{label}</p>
      <p className="text-[11px] text-white font-black italic uppercase tracking-tight">{value}</p>
    </div>
  )
}

