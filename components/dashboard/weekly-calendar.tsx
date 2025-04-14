"use client"

import { useState } from "react"
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameDay, isSameMonth, getDate, addMonths } from "date-fns"
import { es } from "date-fns/locale"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, FileText, Search, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface CalendarEvent {
  id: string;
  clientId: string;
  date: Date;
  time: string;
  title: string;
  color: "amber" | "blue" | "green" | "purple" | "red" | "indigo";
  isBooked: boolean;
}

// Mock data for sessions/meetings
const mockEvents: CalendarEvent[] = [
  {
    id: "1",
    clientId: "1",
    date: new Date(2025, 3, 15),
    time: "13:00",
    title: "Sesión de conducta",
    color: "amber",
    isBooked: false
  },
  {
    id: "2",
    clientId: "1",
    date: new Date(2025, 3, 8),
    time: "10:00",
    title: "Evaluación semanal",
    color: "blue",
    isBooked: false
  },
  {
    id: "3",
    clientId: "2",
    date: new Date(2025, 3, 13),
    time: "12:00",
    title: "Sesión RBT",
    color: "green",
    isBooked: true
  },
  {
    id: "4",
    clientId: "2",
    date: new Date(2025, 3, 20),
    time: "12:00",
    title: "Sesión RBT",
    color: "green",
    isBooked: true
  },
  {
    id: "5",
    clientId: "1",
    date: new Date(2025, 3, 27),
    time: "11:00",
    title: "Sesión BCBA",
    color: "purple",
    isBooked: true
  },
  {
    id: "6",
    clientId: "2",
    date: new Date(2025, 3, 30),
    time: "11:00",
    title: "Reporte mensual",
    color: "red",
    isBooked: true
  },
  {
    id: "7",
    clientId: "1",
    date: new Date(2025, 3, 14),
    time: "14:00",
    title: "Terapia grupal",
    color: "indigo",
    isBooked: false
  },
]

export function WeeklyCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [viewMode, setViewMode] = useState<"month" | "week">("month")

  const monthStart = startOfMonth(currentDate)
  const monthEnd = endOfMonth(monthStart)
  const startDate = startOfWeek(monthStart, { weekStartsOn: 1 }) // Start on Monday
  const endDate = endOfWeek(monthEnd, { weekStartsOn: 1 })

  const goToPreviousMonth = () => {
    setCurrentDate(addMonths(currentDate, -1))
  }

  const goToNextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1))
  }

  const goToToday = () => {
    setCurrentDate(new Date())
  }

  // Generate all days between start and end dates
  const getDaysArray = (): Date[] => {
    const daysArray: Date[] = []
    let day = startDate
    while (day <= endDate) {
      daysArray.push(day)
      day = addDays(day, 1)
    }
    return daysArray
  }

  const days = getDaysArray()

  // For the weekday headers
  const weekdays = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"]

  // Group days into weeks
  const groupDaysIntoWeeks = (): Date[][] => {
    const weeks: Date[][] = []
    let week: Date[] = []

    days.forEach((day, index) => {
      week.push(day)
      if (week.length === 7 || index === days.length - 1) {
        weeks.push(week)
        week = []
      }
    })

    return weeks
  }

  const weeks = groupDaysIntoWeeks()

  // Get events for a specific day
  const getEventsForDay = (day: Date): CalendarEvent[] => {
    return mockEvents.filter(event => isSameDay(event.date, day))
  }

  // Get color class based on color name
  const getColorClass = (color: CalendarEvent['color'], isBooked: boolean): string => {
    const baseClasses = "px-2 py-1 mb-1 cursor-pointer text-xs rounded-sm"

    if (isBooked) {
      return `${baseClasses} bg-gray-100 border-l-2 border-blue-500 text-right`
    }

    const colorMap = {
      blue: "bg-blue-100 text-blue-800 border-l-2 border-blue-500",
      amber: "bg-amber-100 text-amber-800 border-l-2 border-amber-500",
      green: "bg-green-100 text-green-800 border-l-2 border-green-500",
      purple: "bg-purple-100 text-purple-800 border-l-2 border-purple-500",
      red: "bg-red-100 text-red-800 border-l-2 border-red-500",
      indigo: "bg-indigo-100 text-indigo-800 border-l-2 border-indigo-500"
    }

    return `${baseClasses} ${colorMap[color] || "bg-gray-100 text-gray-800"}`
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <div className="text-lg font-medium">
            {format(currentDate, "MMMM yyyy", { locale: es })}
          </div>
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" onClick={goToPreviousMonth} className="h-7 w-7">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" onClick={goToNextMonth} className="h-7 w-7">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          <Button variant="outline" size="sm" onClick={goToToday} className="h-7 text-xs">
            Hoy
          </Button>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative w-40">
            <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              placeholder="Buscar notas..."
              className="h-8 w-full rounded-md border border-input bg-background pl-8 text-xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            />
          </div>

          <Tabs defaultValue="month" className="w-[200px]">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="month" onClick={() => setViewMode("month")}>Vista mensual</TabsTrigger>
              <TabsTrigger value="week" onClick={() => setViewMode("week")}>Vista semanal</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      <div className="rounded-md border shadow-sm overflow-hidden">
        <div className="flex text-xs border-b px-4 py-2 bg-muted/20">
          <div className="font-medium">Todas las sesiones</div>
          <div className="mx-4 text-muted-foreground">|</div>
          <div className="flex gap-4">
            <div className="text-muted-foreground">Pendientes</div>
            <div className="text-muted-foreground">Completadas</div>
            <div className="text-primary">Notas guardadas</div>
          </div>
        </div>

        {/* Weekday Headers */}
        <div className="grid grid-cols-7 bg-muted/10">
          {weekdays.map((day, i) => (
            <div key={i} className="py-2 px-1 text-center text-xs font-medium text-muted-foreground">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="bg-background">
          {weeks.map((week, weekIndex) => (
            <div key={weekIndex} className="grid grid-cols-7 border-t">
              {week.map((day, dayIndex) => {
                const dayEvents = getEventsForDay(day)
                const isCurrentMonth = isSameMonth(day, currentDate)
                const isToday = isSameDay(day, new Date())

                return (
                  <div
                    key={dayIndex}
                    className={cn(
                      "min-h-[90px] border-r p-1 relative",
                      dayIndex === 6 ? "border-r-0" : "",
                      !isCurrentMonth ? "bg-muted/5" : "",
                      isToday ? "bg-blue-50" : ""
                    )}
                  >
                    <div className={cn(
                      "text-right px-1 py-0.5 text-xs font-medium",
                      !isCurrentMonth ? "text-muted-foreground" : "",
                      isToday ? "text-primary font-bold" : ""
                    )}>
                      {getDate(day)}
                    </div>

                    <div className="space-y-1 mt-1">
                      {dayEvents.map(event => (
                        <div
                          key={event.id}
                          className={getColorClass(event.color, event.isBooked)}
                        >
                          {event.isBooked ? (
                            <div className="text-right text-xs text-muted-foreground uppercase tracking-wider font-medium">Programada</div>
                          ) : (
                            <>
                              <div className="text-[10px] opacity-80">{event.time}</div>
                              <div className="text-xs font-medium leading-tight">{event.title}</div>
                            </>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
