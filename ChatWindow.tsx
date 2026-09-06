import React, { useState, useRef, useEffect } from 'react';
import { 
  Send, 
  Sparkles, 
  Building2, 
  User, 
  RotateCcw, 
  Mic, 
  MicOff, 
  Volume2, 
  VolumeX, 
  Copy, 
  Check,
  ShieldCheck
} from 'lucide-react';
import { useProfile } from '../../context/ProfileContext';
import { SuggestedPrompts } from './SuggestedPrompts';
import { SchemeCardInChat } from './SchemeCardInChat';

export const ChatWindow: React.FC = () => {
  const { chatMessages, sendMessage, isAiTyping, clearChat, language, t } = useProfile();
  const [inputText, setInputText] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [speakingMsgId, setSpeakingMsgId] = useState<string | null>(null);
  const [copiedMsgId, setCopiedMsgId] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatMessages, isAiTyping]);

  const handleSend = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputText.trim() || isAiTyping) return;
    const msg = inputText;
    setInputText('');
    await sendMessage(msg);
  };

  const handlePromptSelect = (promptText: string) => {
    sendMessage(promptText);
  };

  // Web Speech API Voice Recognition
  const toggleSpeechRecognition = () => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      alert('Voice input is not supported in this browser. Please type your message.');
      return;
    }

    if (isListening) {
      setIsListening(false);
      return;
    }

    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    
    // Map language code to SpeechRecognition locale
    const speechLocales: Record<string, string> = {
      en: 'en-IN',
      hi: 'hi-IN',
      mr: 'mr-IN',
      ta: 'ta-IN',
      te: 'te-IN',
      bn: 'bn-IN',
      gu: 'gu-IN'
    };
    recognition.lang = speechLocales[language] || 'en-IN';
    recognition.interimResults = false;

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event: any) => {
      const speechToText = event.results[0][0].transcript;
      setInputText(prev => (prev ? `${prev} ${speechToText}` : speechToText));
      setIsListening(false);
    };

    recognition.onerror = () => {
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  };

  // Text to Speech
  const handleToggleSpeak = (msgId: string, text: string) => {
    if (!('speechSynthesis' in window)) return;

    if (speakingMsgId === msgId) {
      window.speechSynthesis.cancel();
      setSpeakingMsgId(null);
      return;
    }

    window.speechSynthesis.cancel();
    const cleanText = text.replace(/[*_#`[\]()]/g, '');
    const utterance = new SpeechSynthesisUtterance(cleanText);
    const speechLocales: Record<string, string> = {
      en: 'en-IN',
      hi: 'hi-IN',
      mr: 'mr-IN',
      ta: 'ta-IN',
      te: 'te-IN',
      bn: 'bn-IN',
      gu: 'gu-IN'
    };
    utterance.lang = speechLocales[language] || 'en-IN';
    utterance.rate = 0.95;

    utterance.onend = () => {
      setSpeakingMsgId(null);
    };
    utterance.onerror = () => {
      setSpeakingMsgId(null);
    };

    setSpeakingMsgId(msgId);
    window.speechSynthesis.speak(utterance);
  };

  const handleCopy = (msgId: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedMsgId(msgId);
    setTimeout(() => setCopiedMsgId(null), 2000);
  };

  const showStarterPrompts = chatMessages.length <= 1;

  return (
    <div className="flex flex-col h-full bg-slate-50/50 relative overflow-hidden">
      
      {/* Chat Sub-Header */}
      <div className="p-3 sm:px-6 py-3 bg-white border-b border-slate-200 flex items-center justify-between gap-3 shadow-2xs z-10">
        <div className="flex items-center gap-2.5">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <div>
            <span className="text-xs font-bold text-slate-800">{t('chat_live_engine')}</span>
            <span className="text-[11px] text-slate-500 block -mt-0.5">{t('chat_active_desc')}</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={clearChat}
            className="px-2.5 py-1 text-xs font-medium text-slate-600 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors flex items-center gap-1.5"
            title="Start new conversation"
          >
            <RotateCcw className="w-3.5 h-3.5 text-slate-400" />
            <span className="hidden sm:inline">{t('chat_new_chat')}</span>
          </button>
        </div>
      </div>

      {/* Message Stream */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
        
        {chatMessages.map((msg) => {
          const isUser = msg.sender === 'user';

          return (
            <div
              key={msg.id}
              className={`flex items-start gap-3 ${isUser ? 'justify-end' : 'justify-start'} animate-fade-in`}
            >
              {/* AI Avatar */}
              {!isUser && (
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5 ring-2 ring-blue-100">
                  <Building2 className="w-4 h-4" />
                </div>
              )}

              {/* Message Bubble Container */}
              <div className={`flex flex-col ${isUser ? 'items-end' : 'items-start'} max-w-[92%] sm:max-w-[85%]`}>
                
                {/* Bubble Body */}
                <div className={isUser ? 'chat-bubble-user' : 'chat-bubble-ai'}>
                  
                  {/* Markdown formatted text */}
                  <div className="text-xs sm:text-sm text-slate-800 leading-relaxed whitespace-pre-wrap">
                    {msg.text}
                  </div>

                  {/* Embedded Scheme Recommendation Cards */}
                  {msg.matchedSchemes && msg.matchedSchemes.length > 0 && (
                    <div className="mt-4 pt-3 border-t border-slate-100 space-y-3">
                      <div className="flex items-center justify-between text-xs font-bold text-slate-900">
                        <span className="flex items-center gap-1.5 text-blue-700">
                          <Sparkles className="w-4 h-4" />
                          {t('chat_recommended_schemes')} ({msg.matchedSchemes.length})
                        </span>
                        <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                          {t('chat_verified_criteria')}
                        </span>
                      </div>

                      {msg.matchedSchemes.map((scheme) => (
                        <SchemeCardInChat key={scheme.id} scheme={scheme} />
                      ))}
                    </div>
                  )}

                  {/* Bubble Action Footer (for Assistant messages) */}
                  {!isUser && (
                    <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                      <div className="flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-slate-500 font-medium">Verified Public Portal Guidelines</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleToggleSpeak(msg.id, msg.text)}
                          className="hover:text-blue-600 transition-colors p-1 rounded hover:bg-slate-100"
                          title={t('chat_read_aloud')}
                          aria-label="Text to speech"
                        >
                          {speakingMsgId === msg.id ? (
                            <VolumeX className="w-3.5 h-3.5 text-blue-600 animate-pulse" />
                          ) : (
                            <Volume2 className="w-3.5 h-3.5" />
                          )}
                        </button>
                        <button
                          onClick={() => handleCopy(msg.id, msg.text)}
                          className="hover:text-blue-600 transition-colors p-1 rounded hover:bg-slate-100"
                          title={t('chat_copy')}
                          aria-label="Copy response"
                        >
                          {copiedMsgId === msg.id ? (
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    </div>
                  )}

                </div>

                {/* Follow up prompt suggestions attached to assistant messages */}
                {!isUser && msg.suggestedFollowUps && msg.suggestedFollowUps.length > 0 && (
                  <div className="mt-2.5 w-full">
                    <SuggestedPrompts
                      onSelectPrompt={handlePromptSelect}
                      customPrompts={msg.suggestedFollowUps}
                    />
                  </div>
                )}

              </div>

              {/* User Avatar */}
              {isUser && (
                <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                  <User className="w-4 h-4" />
                </div>
              )}

            </div>
          );
        })}

        {/* AI Typing Animation Dots */}
        {isAiTyping && (
          <div className="flex items-start gap-3 animate-fade-in">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 text-white flex items-center justify-center shrink-0 shadow-xs ring-2 ring-blue-100">
              <Building2 className="w-4 h-4" />
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl rounded-tl-sm p-4 shadow-subtle flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-500">{t('chat_checking_eligibility')}</span>
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-bounce" style={{ animationDelay: '0ms' }}></span>
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-bounce" style={{ animationDelay: '150ms' }}></span>
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-bounce" style={{ animationDelay: '300ms' }}></span>
              </div>
            </div>
          </div>
        )}

        {/* Empty state / Starting Prompts */}
        {showStarterPrompts && (
          <div className="py-4">
            <SuggestedPrompts onSelectPrompt={handlePromptSelect} />
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Sticky Bottom Input Bar */}
      <div className="p-3 sm:p-4 bg-white border-t border-slate-200 shadow-lg">
        <form onSubmit={handleSend} className="max-w-4xl mx-auto space-y-2">
          
          <div className="relative flex items-center">
            <input
              ref={inputRef}
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={t('chat_placeholder')}
              className="w-full py-3 sm:py-3.5 pl-4 pr-24 sm:pr-28 text-xs sm:text-sm text-slate-900 bg-slate-50 hover:bg-slate-50/80 focus:bg-white border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 rounded-2xl transition-all shadow-inner outline-none"
              disabled={isAiTyping}
            />

            <div className="absolute right-2 flex items-center gap-1">
              {/* Mic / Speech Button */}
              <button
                type="button"
                onClick={toggleSpeechRecognition}
                className={`p-2 rounded-xl border transition-colors ${
                  isListening
                    ? 'bg-rose-50 text-rose-600 border-rose-300 animate-pulse'
                    : 'text-slate-400 hover:text-slate-700 border-transparent hover:bg-slate-100'
                }`}
                title={isListening ? 'Stop listening' : 'Voice input'}
                aria-label="Voice input"
              >
                {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
              </button>

              {/* Send Button */}
              <button
                type="submit"
                disabled={!inputText.trim() || isAiTyping}
                className="p-2 sm:px-3.5 sm:py-2 text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-40 disabled:hover:bg-blue-600 rounded-xl transition-all font-semibold text-xs flex items-center gap-1.5 shadow-xs"
                aria-label="Send message"
              >
                <span className="hidden sm:inline">{t('chat_send')}</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] text-slate-400 px-1">
            <span>{t('chat_disclaimer_short')}</span>
            <span>{t('chat_no_form_notice')}</span>
          </div>

        </form>
      </div>

    </div>
  );
};
