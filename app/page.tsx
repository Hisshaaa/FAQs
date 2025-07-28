"use client"

import { MessageCircle, Mail } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const faqs = [
  {
    id: "1",
    question: "The system is very slow today. Can you check?",
    answer:
      "Please try first:\n• Test your internet speed or switch networks.\n• Close unused browser tabs/app windows.\n• Log out and back in to refresh your session.\n\nIf it remains slow, please share the time, module, and any screen recording so we can trace server/database load and update you promptly.",
  },
  {
    id: "2",
    question: "I can't log in. It says invalid username/password.",
    answer:
      "Please try first:\n• Ensure Caps Lock is correct.\n• Clear browser cache or use an incognito window.\n• Use \"Forgot Password\" if needed.\n\nSecurity notice: Five wrong attempts will lock the account for 30 minutes.\n\nIf you still can't log in, reply with your username or registered email, and we'll reset your password and send a temporary login.",
  },
  {
    id: "3",
    question: "I submitted a request form, but the status hasn't changed.",
    answer:
      "To help you quickly, please try the following first:\n• Refresh your browser (Ctrl + F5)\n• Log out and log back in after a few minutes, as some updates may depend on scheduled background jobs\n\nIf the issue persists, kindly provide us with the following details to assist with tracking:\n• Type of form submitted (e.g., access request, approval form, claim form)\n• Submission reference number (if available)\n• Date and time of submission\n• The name of the module or function used\n\nOnce we receive this information, we will check the system logs and background processing status and get back to you as soon as possible.",
  },
  {
    id: "4",
    question: "Why is my ticket taking so long to resolve?",
    answer:
      "Your ticket is currently under 2nd‑level investigation. Complex cases require deeper analysis, but we're following up closely and will update you as soon as we have news. Thank you for your understanding.",
  },
  {
    id: "5",
    question: "Can I get a copy of my previous reports/records?",
    answer:
      'Thank you for your request.\n\nMost reports or records can be retrieved directly by users from the system.\n\nPlease try the following first:\n• Navigate to the "Reports" or "History" section in your dashboard\n• If it\'s an older report, check under the "Archive" section (if available)\n• Use filters such as date range, report type, or status to locate it faster\n\nIf you\'re still unable to retrieve the file, kindly provide the following:\n• Report type (e.g., claim summary, transaction log)\n• Date range or specific period needed\n• Any reference number (if applicable)\n\nOnce we receive this information, we\'ll assist by checking the backend and send you the file if it\'s still stored on our side.',
  },
  {
    id: "6",
    question: "The download function was working before, now suddenly it's not.",
    answer:
      'We understand the download function was previously working as expected, but is now encountering issues.\n\nPlease try the following first:\n• Clear your browser cache and cookies\n• Try accessing the feature using a different browser (e.g., Chrome, Edge, Firefox)\n• Ensure no new browser extensions or pop-up blockers are preventing downloads\n\nIf the issue persists, please provide us with:\n• The exact name of the function or module (e.g., "Transaction Report Download")\n• The last date/time it worked successfully\n• Any error message or behaviour you are seeing now (e.g., button unresponsive, file not downloading, etc.)\n• A screenshot or screen recording, if possible\n\nWe will check the logs and recent configurations from our end and assist you further.',
  },
  {
    id: "7",
    question: "My terminal/app keeps showing an error.",
    answer:
      "Sorry for the disruption.\n\nPlease try first:\n• Restart the app or terminal.\n• Verify network/VPN connectivity.\n\nIf the error persists, reply with a screenshot or exact error code so we can diagnose faster.",
  },
  {
    id: "8",
    question: "How do I know my request is being processed?",
    answer:
      "Every request creates a ticket. You'll receive email/WhatsApp updates at each stage. You may also reply with your ticket ID for a live status check anytime.",
  },
  {
    id: "9",
    question: "Can I escalate this issue? It's urgent.",
    answer:
      "We've flagged your ticket as High Priority and escalated it to 2nd‑level support. We'll provide the latest findings or resolution as soon as possible.",
  },
  {
    id: "10",
    question: "Who should I contact for this kind of issue?",
    answer:
      "• Application/System issues: contact our Application Support (this channel).\n• Terminal hardware issues: we'll refer you to the Terminal Support team.\n\nSend a brief description and we'll route you correctly.",
  },
  {
    id: "11",
    question: "I submitted a ticket but didn't get any reply.",
    answer:
      "Apologies for the delay. Your ticket is logged and under review. We'll update you shortly. Please keep the ticket ID in your subject line so replies thread correctly.",
  },
  {
    id: "12",
    question: "I'm getting a blank page / nothing loads.",
    answer:
      "Please try first:\n• Clear cache (Ctrl + Shift + Del) and reload.\n• Switch to Chrome, Edge, or Firefox latest version.\n\nStill blank? Send the URL and a screenshot; we'll investigate further.",
  },
  {
    id: "13",
    question: "Can you re-activate my account or reset my access?",
    answer:
      'You can reset your password via "Forgot Password".\n\nIf your account remains locked, reply with your registered email/username. We\'ll reset access and email a temporary login within minutes.',
  },
  {
    id: "14",
    question: "I need a report / file urgently. Can you send it now?",
    answer:
      "We'll prioritise your request.\n\nPlease provide the report name, date range, and reference number. We'll generate and send it as soon as possible.",
  },
  {
    id: "15",
    question: "The file I uploaded isn't appearing in the system.",
    answer:
      "Please confirm:\n• File format (CSV/XLSX/PDF) and size within limits.\n• File naming follows required conventions.\n\nIf the file still doesn't show, share the filename and upload time; we'll check backend logs.",
  },
  {
    id: "16",
    question: "System shows an error when submitting / saving.",
    answer:
      "Please try first:\n• Refresh the page and resubmit.\n• Ensure all mandatory fields are filled.\n\nIf the error reappears, capture the exact message or code and send it to us; we'll trace and guide you further.",
  },
  {
    id: "17",
    question: "I want to change company info / update system settings.",
    answer:
      "Please email the details you'd like changed (company name, PIC, contact info). Depending on your access level, we'll guide you through the steps or update it for you and confirm once done.",
  },
  {
    id: "18",
    question: "I received the wrong output / file / response.",
    answer:
      "Thank you for bringing this to our attention. We'll verify against your request and regenerate the correct output. Kindly provide the ticket number and the expected result for quick alignment.",
  },
  {
    id: "19",
    question: "Can I add a new user to the system?",
    answer:
      "Yes.\n\nIf you have admin rights: Go to Settings › User Management and add the user.\n\nIf not, please provide the new user's full name, email, designation, and required access level. We'll add the account and confirm back.",
  },
  {
    id: "20",
    question: "My terminal/system disconnected suddenly.",
    answer:
      "Please check first:\n• Internet/Wi‑Fi/LAN connectivity.\n• Power supply and cables.\n• Restart the device.\n\nIf still disconnected, share the terminal ID or branch location; we'll review connectivity logs and update you.",
  },
  {
    id: "21",
    question: "I didn't get any email confirmation / notification.",
    answer:
      "Please try first:\n• Check your Spam/Junk folder.\n• Add our domain to your safe‑sender list.\n\nIf still missing, confirm your email address and we'll re‑send the notification or trigger it manually.",
  },
  {
    id: "22",
    question: "I want to cancel or delete a request/ticket I made.",
    answer:
      "Please send the ticket number or request ID. We'll mark it as cancelled, stop further processing, and confirm back to you.",
  },
  {
    id: "23",
    question: "My approval/request is stuck. What should I do?",
    answer:
      "Please provide the request ID. We'll identify where it's pending (e.g., supervisor, finance) and nudge the approver or escalate as necessary.",
  },
  {
    id: "24",
    question: "Is there any system downtime or maintenance happening now?",
    answer:
      "There is no scheduled maintenance or outage at the moment. If you're experiencing an issue, please describe the symptoms, module, and time. We'll check if it's a localised problem or a wider incident and update you accordingly.",
  },
  {
    id: "25",
    question: "Can I get a user guide or SOP for this system?",
    answer:
      "Absolutely. Let us know which system or module you need help with and we'll email you the latest user guide/SOP.",
  },
]

export default function FAQPage() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/60162692036", "_blank")
  }

  const handleEmailClick = () => {
    window.open("mailto:support@cardbiz.com.my", "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our system. If you can't find what you're looking for, feel free to
            contact our support team.
          </p>
        </div>

        {/* FAQ Section */}
        <Card className="mb-12 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-center">General FAQ</CardTitle>
            <CardDescription className="text-center">Applies across all projects and systems</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id}>
                  <AccordionTrigger className="text-left hover:text-blue-600 transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 whitespace-pre-line leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        {/* Contact Section */}
        <Card className="shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Need More Help?</CardTitle>
            <CardDescription>Contact our support team directly for personalized assistance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={handleWhatsAppClick}
                className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors"
                size="lg"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp Support
                <span className="text-sm opacity-90">+60 16-269 2036</span>
              </Button>

              <Button
                onClick={handleEmailClick}
                variant="outline"
                className="flex items-center gap-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg transition-colors bg-transparent"
                size="lg"
              >
                <Mail className="h-5 w-5" />
                Email Support
                <span className="text-sm opacity-90">support@cardbiz.com.my</span>
              </Button>
            </div>

            <div className="mt-6 text-center text-sm text-gray-500">
              <p>Our support team is available to help you with any questions or issues.</p>
              <p className="mt-1">
                <strong>Support Hours:</strong> 9:00 AM - 6:00 PM (Monday to Friday)
              </p>
              <p className="mt-1">
                Response time: Within 24 hours for email, immediate for WhatsApp during support hours.
              </p>
            </div>
          </CardContent>
        </Card>
 {/* Chatbot */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isChatOpen ? (
          <Button
            onClick={() => setIsChatOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-full w-14 h-14 shadow-lg"
          >
            <Bot size={24} />
          </Button>
        ) : (
          <Card className={`w-80 h-96 shadow-xl transition-all duration-300 ${isMinimized ? "h-12" : "h-96"}`}>
            <CardHeader className="bg-blue-600 text-white p-3 rounded-t-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Bot size={20} />
                  <span className="font-medium">Support Assistant</span>
                </div>
                <div className="flex gap-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsMinimized(!isMinimized)}
                    className="text-white hover:bg-blue-700 p-1 h-6 w-6"
                  >
                    <Minimize2 size={14} />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsChatOpen(false)}
                    className="text-white hover:bg-blue-700 p-1 h-6 w-6"
                  >
                    <X size={14} />
                  </Button>
                </div>
              </div>
            </CardHeader>

            {!isMinimized && (
              <>
                <CardContent className="flex-1 p-4 h-64 overflow-y-auto">
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <div key={message.id} className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}>
                        <div
                          className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                            message.isBot ? "bg-gray-100 text-gray-800" : "bg-blue-600 text-white"
                          }`}
                        >
                          <div className="whitespace-pre-line">{message.text}</div>
                          <div className={`text-xs mt-1 ${message.isBot ? "text-gray-500" : "text-blue-100"}`}>
                            {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                          </div>
                        </div>
                      </div>
                    ))}

                    {isTyping && (
                      <div className="flex justify-start">
                        <div className="bg-gray-100 px-3 py-2 rounded-lg text-sm">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                            <div
                              className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                              style={{ animationDelay: "0.1s" }}
                            ></div>
                            <div
                              className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                              style={{ animationDelay: "0.2s" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>
                </CardContent>

                <div className="p-3 border-t">
                  <div className="flex gap-2">
                    <Input
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Type your question..."
                      className="flex-1"
                    />
                    <Button
                      onClick={handleSendMessage}
                      disabled={!inputMessage.trim() || isTyping}
                      className="bg-blue-600 hover:bg-blue-700"
                    >
                      <Send size={16} />
                    </Button>
                  </div>
                </div>
              </>
            )}
          </Card>
        )}
      </div>
        {/* Footer */}
        <div className="text-center mt-8 text-gray-500 text-sm">
          <p>© 2024 CardBiz Support Center. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}
